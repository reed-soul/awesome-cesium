# Phase 3 Report - Awesome Cesium

## Summary

Phase 3 establishes the quality maintenance foundation for long-term list sustainability.

## Deliverables

### 1. Inclusion Criteria Document
- **EN**: `docs/INCLUSION_CRITERIA.md`
- **ZH**: `docs/INCLUSION_CRITERIA.zh.md`
- Defines formal inclusion/exclusion criteria
- Documents special labels (Outdated, Experimental, etc.)
- CesiumJS version compatibility notes

### 2. Automated Quality Check
- **Workflow**: `.github/workflows/quality-check.yml`
- **Schedule**: Monthly (1st of each month, 3:00 AM UTC)
- **Script**: `scripts/quality-check.mjs`
- **Actions**: Extracts GitHub repos from README, checks last push date
- **Output**: Creates issues for outdated (24+ months) or 404 repos

### 3. README Updates
- **Legend**: Added `⚠️ [Outdated - YEAR]` explanation
- **Statistics**: Updated to February 2025
- **Footer**: Link to Inclusion Criteria for quality standards
- **Version note**: CesiumJS 1.x compatibility statement

### 4. Documentation Updates
- **CONTRIBUTING.md**: Quality check details with link to Inclusion Criteria
- **CONTRIBUTING.zh.md**: Same updates in Chinese
- **.gitignore**: Ignore script output files

## Maintenance Cadence

| Task | Frequency |
|------|-----------|
| Link check | Weekly (Monday) |
| Quality audit | Monthly (1st) |
| Star badges | Dynamic (shields.io) |
| Manual review | Quarterly |
