#!/usr/bin/env node
/** Check GitHub repo last push dates for Phase 1 audit */
import https from 'https';
import fs from 'fs';

const repos = [
  'Developer-Plexscape/cesium-angular-example', 'Anka-Geo/angular-cesium',
  'zouyaoji/vue-cesium', 'weshmily/cesium-vue', 'reearth/resium',
  'CesiumGS/cesium-unreal', 'CesiumGS/cesium-unity',
  'geo-data/cesium-terrain-builder', 'ahuarte47/cesium-terrain-builder',
  'geo-data/cesium-terrain-server', 'fanvanzh/3dtiles', 'KhronosGroup/COLLADA2GLTF',
  'donmccurdy/glTF-Transform', 'CesiumGS/obj2gltf', 'njam/citygml-to-3dtiles',
  'tum-gis/cesium-point-cloud-generator', 'syzdev/cesium-plugins', 'bingqixuan/Cesium-Plugin',
  'abwood/d3cesium', 'MikesWei/CesiumMeshVisualizer', 'openlayers/ol-cesium',
  'pupitetris/cesium-webxr', 'NICTA/cesium-vr', 'MikesWei/CesiumVectorTile',
  'kaktus40/Cesium-GeoserverTerrainProvider', 'leforthomas/cesium-drawhelper',
  'gitgitczl/CesiumExp-measure', 'WaterSeeding/CesiumRoadImageFlowMaterial',
  'Duckiduc/cesium-gpx-viewer', 'Ice-and-Rock/Nick_Learns_CesiumJS',
  'ps428/Gesture-Controlled-3D-World', 'dvgis/dc-sdk',
  'YanzheZhang/Cesium.HPUZYZ.Demo', 'pasu/ExamplesforCesium',
  'shashwatak/satellite-js', 'Flowm/satvis', 'RaymanNg/3D-Wind-Field',
  'CesiumGS/cesium-omniverse', 'CesiumGS/cesium'
];

function fetch(owner, repo) {
  return new Promise((resolve) => {
    https.get(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { 'User-Agent': 'Awesome-Cesium-Audit/1.0' }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          resolve(j.pushed_at ? {
            ok: true, pushedAt: j.pushed_at,
            monthsAgo: Math.floor((Date.now() - new Date(j.pushed_at)) / (30*24*3600*1000))
          } : { ok: false });
        } catch { resolve({ ok: false }); }
      });
    }).on('error', () => resolve({ ok: false }));
  });
}

async function main() {
  const results = [];
  for (const repo of repos) {
    const r = await fetch(...repo.split('/'));
    results.push({ repo, ...r });
    const icon = r.ok ? (r.monthsAgo >= 24 ? '⚠' : '✓') : '✗';
    console.log(`${icon} ${repo}: ${r.ok ? r.monthsAgo + ' months ago' : 'NOT FOUND'}`);
    await new Promise(r => setTimeout(r, 400));
  }
  fs.writeFileSync('scripts/github-audit.json', JSON.stringify(results, null, 2));
  console.log('\nSaved to scripts/github-audit.json');
}

main();
