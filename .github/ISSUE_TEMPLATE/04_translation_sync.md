---
name: 🌍 Translation Sync
description: Report translation sync issues or request translation updates
title: "[Translation] "
labels: ["translation", "documentation"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        ## 🌍 Translation Sync Issue
        
        Thank you for helping to keep our multi-language documentation in sync!
        
        **语言支持 Language Support:**
        - 🇺🇸 English (Primary)
        - 🇨🇳 简体中文 (Chinese Simplified)

  - type: dropdown
    id: issue-type
    attributes:
      label: Issue Type / 问题类型
      description: What type of translation issue are you reporting?
      options:
        - Content out of sync / 内容不同步
        - Missing translation / 缺少翻译
        - Translation error / 翻译错误
        - New language request / 新语言请求
        - Translation improvement / 翻译改进
    validations:
      required: true

  - type: checkboxes
    id: affected-files
    attributes:
      label: Affected Files / 受影响的文件
      description: Which files need translation updates?
      options:
        - label: README.md ↔️ README.zh.md
        - label: CONTRIBUTING.md ↔️ CONTRIBUTING.zh.md
        - label: Issue templates / Issue模板
        - label: Other documentation / 其他文档

  - type: textarea
    id: description
    attributes:
      label: Description / 详细描述
      description: |
        Please describe the translation issue in detail.
        请详细描述翻译问题。
      placeholder: |
        例如：
        - 英文版README在第XXX行添加了新资源，但中文版没有对应更新
        - 某个技术术语的翻译不准确
        - 建议添加新的语言支持
    validations:
      required: true

  - type: textarea
    id: expected-behavior
    attributes:
      label: Expected Behavior / 期望结果
      description: What should the correct translation be?
      placeholder: |
        描述期望的翻译结果或修正方案...

  - type: dropdown
    id: priority
    attributes:
      label: Priority / 优先级
      description: How urgent is this translation issue?
      options:
        - Low - Typo or minor improvement / 低 - 拼写错误或小改进
        - Medium - Content sync needed / 中 - 需要内容同步
        - High - Major translation error / 高 - 重大翻译错误
        - Critical - Broken functionality / 紧急 - 功能性问题
    validations:
      required: true

  - type: checkboxes
    id: contribution
    attributes:
      label: Contribution Offer / 贡献意愿
      description: Are you willing to help with the translation?
      options:
        - label: I can help translate / 我可以帮助翻译
        - label: I can review translations / 我可以审核翻译
        - label: I can maintain a specific language / 我可以维护特定语言版本

  - type: textarea
    id: additional-context
    attributes:
      label: Additional Context / 额外信息
      description: |
        Any other information that would be helpful.
        其他有用的信息。
      placeholder: |
        - 相关链接
        - 截图
        - 参考资料
        - 其他建议

  - type: markdown
    attributes:
      value: |
        ---
        
        ## 📋 Translation Guidelines / 翻译指南
        
        ### For Contributors / 贡献者须知：
        - **Accuracy** / 准确性: Technical terms should be precise
        - **Consistency** / 一致性: Use consistent terminology throughout
        - **Clarity** / 清晰度: Maintain the original meaning and intent
        - **Cultural Adaptation** / 文化适应: Adapt examples when necessary
        
        ### 常用术语 Common Terms：
        - Library → 库
        - Framework → 框架  
        - Plugin → 插件
        - Integration → 集成
        - Visualization → 可视化
        - Terrain → 地形
        - Geospatial → 地理空间
        
        Thank you for helping make awesome-cesium accessible to more developers worldwide! 🌍 