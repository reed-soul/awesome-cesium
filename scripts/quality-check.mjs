#!/usr/bin/env node
/**
 * Phase 3 - Monthly Quality Check Script
 * Extracts GitHub repos from README, checks last push date, outputs report
 * Used by .github/workflows/quality-check.yml
 */
import fs from 'fs';
import https from 'https';

const README = 'README.md';
const OUTDATED_MONTHS = 24;

function extractGitHubRepos(content) {
  const regex = /https:\/\/github\.com\/([^\/]+)\/([^\/\)\s?#]+)/g;
  const seen = new Set();
  const repos = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    const owner = m[1];
    let repo = m[2].replace(/\.git$/, '').replace(/[\)\].]*$/, '');
    if (repo.includes('?')) repo = repo.split('?')[0];
    const key = `${owner}/${repo}`;
    if (seen.has(key)) continue;
    seen.add(key);
    if (['reed-soul', 'shields.io'].some(s => owner.includes(s) || repo.includes(s))) continue;
    repos.push({ owner, repo, key });
  }
  return repos;
}

function fetchRepo(owner, repo, token) {
  return new Promise((resolve) => {
    const opts = {
      headers: { 'User-Agent': 'awesome-cesium-quality-check' }
    };
    if (token) opts.headers['Authorization'] = `Bearer ${token}`;

    https.get(`https://api.github.com/repos/${owner}/${repo}`, opts, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          if (j.message === 'Not Found') {
            resolve({ key: `${owner}/${repo}`, found: false });
          } else {
            const pushed = j.pushed_at || j.updated_at;
            const months = pushed
              ? Math.floor((Date.now() - new Date(pushed)) / (30 * 24 * 3600 * 1000))
              : 999;
            resolve({
              key: `${owner}/${repo}`,
              found: true,
              pushedAt: pushed,
              monthsAgo: months,
              outdated: months >= OUTDATED_MONTHS
            });
          }
        } catch {
          resolve({ key: `${owner}/${repo}`, found: false });
        }
      });
    }).on('error', () => resolve({ key: `${owner}/${repo}`, found: false }));
  });
}

async function main() {
  const content = fs.readFileSync(README, 'utf8');
  const repos = extractGitHubRepos(content);
  const token = process.env.GITHUB_TOKEN;

  console.log(`Checking ${repos.length} repositories...\n`);

  const results = [];
  for (const { owner, repo } of repos) {
    const r = await fetchRepo(owner, repo, token);
    results.push(r);
    if (!r.found) {
      console.log(`✗ NOT FOUND: ${r.key}`);
    } else if (r.outdated) {
      console.log(`⚠ OUTDATED: ${r.key} (${r.monthsAgo} months ago)`);
    } else {
      console.log(`✓ OK: ${r.key} (${r.monthsAgo} months ago)`);
    }
    await new Promise((x) => setTimeout(x, 250));
  }

  const outdated = results.filter((r) => r.found && r.outdated);
  const notFound = results.filter((r) => !r.found);

  const report = {
    date: new Date().toISOString(),
    total: repos.length,
    outdated: outdated.length,
    notFound: notFound.length,
    outdatedRepos: outdated.map((r) => ({
      repo: r.key,
      monthsAgo: r.monthsAgo,
      lastPush: r.pushedAt
    })),
    notFoundRepos: notFound.map((r) => r.key)
  };

  fs.writeFileSync('scripts/quality-report.json', JSON.stringify(report, null, 2));
  console.log(`\n--- Report ---`);
  console.log(`Outdated (${OUTDATED_MONTHS}+ months): ${outdated.length}`);
  console.log(`Not found: ${notFound.length}`);
  console.log(`Report: scripts/quality-report.json`);

  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
