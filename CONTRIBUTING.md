# Contributing to Awesome Cesium

We love contributions from the community! Thank you for your interest in making `awesome-cesium` even better.

**🌐 Language/语言:** [English](CONTRIBUTING.md) | [简体中文](CONTRIBUTING.zh.md)

## 🚀 Quick Start

1. **Fork** this repository
2. **Create** a feature branch (`git checkout -b feature/add-awesome-resource`)
3. **Add** your resource following our guidelines
4. **Commit** your changes (`git commit -m 'feat: add awesome resource'`)
5. **Push** to your branch (`git push origin feature/add-awesome-resource`)
6. **Open** a Pull Request

## 📋 How to Contribute

### 🆕 Adding New Resources

**Before adding a resource, please ensure it:**

1. **Is directly related to Cesium** - The resource should extend, enhance, or integrate with CesiumJS
2. **Provides unique value** - Avoid duplicating existing resources
3. **Is well-documented** - Should have clear README, API docs, or usage examples
4. **Is actively maintained** - Recent commits (within 24 months preferred)
5. **Works as advertised** - Please test the resource before submitting

### 🔍 Quality Standards

#### For GitHub Repositories:
- ✅ Has a comprehensive README
- ✅ Includes examples or demos
- ✅ Has clear licensing information
- ✅ Shows recent activity (commits, issues, releases)
- ✅ Follows good coding practices

#### For Documentation/Tutorials:
- ✅ Clear, accurate, and up-to-date content
- ✅ Proper formatting and structure
- ✅ Includes practical examples
- ✅ Accessible and well-written

#### For Tools/Applications:
- ✅ Stable and functional
- ✅ Clear installation/usage instructions
- ✅ Solves a real problem for Cesium developers

## 📝 Formatting Guidelines

### Entry Format
```markdown
*   [Resource Name](https://github.com/user/repo) ![GitHub stars](https://img.shields.io/github/stars/user/repo?style=flat&logo=github) - Clear description of what it does.
```

### Description Guidelines
- **Be concise** - Keep descriptions under 100 characters when possible
- **Be specific** - Explain what the resource does, not just what it is
- **Use active voice** - "Provides X" rather than "X is provided"
- **End with a period** - Maintain consistency

### Special Labels
Use these labels when appropriate:
- `⚠️ **[Outdated]**` - For resources that work but are no longer maintained
- `🧪 **[Experimental]**` - For cutting-edge or unstable resources
- `🆕 **[New]**` - For recently added resources (within 3 months)
- `🌟 **[Popular]**` - For widely-used community favorites

## 🗂️ Categories

### Current Categories:
- **Official Resources** - Official Cesium documentation and tools
- **Community** - Forums, discussions, social platforms
- **Learning Resources** - Tutorials, blogs, videos, books
- **Framework Integration** - Angular, Vue, React integrations
- **Game Engine Integration** - Unity, Unreal, Godot support
- **Data Processing** - Terrain building, 3D model conversion
- **Libraries & Plugins** - Third-party extensions and tools
- **SDK & Development Frameworks** - Complete development platforms
- **Open Source Projects** - Community projects and examples
- **Applications** - Real-world applications and demos
- **Showcases** - Demonstrations and galleries
- **Data Sources** - Geospatial data providers
- **Tools** - Development and utility tools
- **Ecosystem** - Related projects and integrations

### Adding New Categories:
If you believe a new category is needed:
1. Create an issue using the "Feature Request" template
2. Provide justification for the new category
3. Suggest at least 3-5 resources that would fit
4. Wait for community discussion and maintainer approval

## 🤖 Automated Processes

### Link Checking
- **Frequency**: Weekly (Mondays at 9:00 AM UTC)
- **Process**: Automatically checks all links for accessibility
- **Action**: Creates issues for broken links

### Star Count Updates
- **Frequency**: Weekly (Sundays at 2:00 AM UTC)
- **Process**: Updates GitHub star badges (shields.io badges are dynamic)
- **Action**: No manual intervention needed

### Quality Checks
- **Frequency**: Monthly (1st of each month)
- **Process**: Runs `scripts/quality-check.mjs` to audit GitHub repo activity
- **Action**: Creates issues for outdated (24+ months inactive) or 404 repositories
- **Details**: See [Inclusion Criteria](docs/INCLUSION_CRITERIA.md)

## 🛠️ Issue Templates

We provide several issue templates to help you contribute:

### 🆕 Add New Resource
Use this when you want to suggest a new resource.

### 🐛 Report Issue
Use this for broken links, outdated information, or other problems.

### 💡 Feature Request
Use this to suggest improvements to the project structure or functionality.

## 📊 Pull Request Process

1. **Use the PR template** - Fill out all relevant sections
2. **Quality check** - Ensure your addition meets our standards
3. **Test links** - Verify all URLs work correctly
4. **Follow format** - Match the existing style and structure
5. **One resource per PR** - Keep PRs focused and reviewable

### PR Review Criteria:
- ✅ Follows formatting guidelines
- ✅ Resource meets quality standards
- ✅ Proper category placement
- ✅ No duplicate entries
- ✅ Links are functional
- ✅ Description is clear and accurate

## 🚫 What Not to Include

### ❌ Avoid These:
- **Personal projects** without community adoption
- **Commercial products** without free tiers or open-source components
- **Broken or abandoned projects** (unless historically significant)
- **Duplicate functionality** already well-covered
- **Off-topic resources** not directly related to Cesium
- **Self-promotion** without community validation

### ⚠️ Gray Areas:
- **Early-stage projects** - Consider if they show promise
- **Educational content** - Ensure it's high-quality and current
- **Paid resources** - Include only if they provide exceptional value

## 🌍 Community Guidelines

### Be Respectful
- Use inclusive language
- Be constructive in feedback
- Respect different perspectives and approaches

### Be Helpful
- Provide context for your suggestions
- Help newcomers understand the contribution process
- Share knowledge and experiences

### Be Collaborative
- Engage in discussions thoughtfully
- Consider the community impact of changes
- Work together to improve the resource

## 🔧 Development Setup

### Local Testing
```bash
# Clone your fork
git clone https://github.com/reed-soul/awesome-cesium.git
cd awesome-cesium

# Install dependencies (for link checking)
npm install -g markdown-link-check

# Check links locally
markdown-link-check README.md

# Check formatting
# (Visual inspection or use a markdown linter)
```

### Pre-commit Checklist
- [ ] All links tested and working
- [ ] Formatting matches existing style
- [ ] No spelling errors
- [ ] Proper category placement
- [ ] Description is clear and concise
- [ ] GitHub star badge included (if applicable)

## 📈 Maintenance

### Regular Tasks:
- **Weekly**: Review new issues and PRs
- **Monthly**: Check for outdated resources
- **Quarterly**: Review category structure
- **Annually**: Major restructure if needed

### Community Involvement:
- Help with link checking
- Suggest improvements
- Review PRs from other contributors
- Share the list with the Cesium community

## 🎉 Recognition

Contributors are recognized in several ways:
- **GitHub Contributors** - Automatic recognition via GitHub
- **Release Notes** - Major contributors mentioned in releases
- **Community Shoutouts** - Recognition in project updates

## 📞 Getting Help

### Need Help?
- **GitHub Issues** - For project-related questions
- **GitHub Discussions** - For broader community discussions
- **Cesium Community Forum** - For technical Cesium questions

### Contact Maintainers:
- Create an issue for general questions
- Use discussions for community topics
- Mention `@reed-soul` for urgent matters

---

## 📜 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (CC0-1.0).

---

**Thank you for making Awesome Cesium better for everyone!** 🌍✨

*Remember: Quality over quantity. A few well-curated resources are better than many mediocre ones.* 