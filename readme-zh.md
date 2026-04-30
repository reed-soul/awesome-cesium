# Awesome Cesium [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> CesiumJS 是一款开源 JavaScript 库，用于在浏览器中构建三维地球与地图，支持地理空间数据流式传输，并兼顾性能、精度与视觉质量。

本列表整理与 Cesium 生态相关的库、工具、框架与引擎集成及学习资源。

## Contents

- [Quick Start](#quick-start)
- [官方资源](#官方资源)
- [社区](#社区)
- [学习资源](#学习资源)
- [框架集成](#框架集成)
- [游戏引擎集成](#游戏引擎集成)
- [数据处理](#数据处理)
- [库和插件](#库和插件)
- [性能与优化](#性能与优化)
- [AI 集成](#ai-集成)
- [SDK与开发框架](#sdk与开发框架)
- [开源项目](#开源项目)
- [应用案例](#应用案例)
- [展示案例](#展示案例)
- [数据源与平台](#数据源与平台)
- [工具](#工具)
- [生态系统](#生态系统)
- [未来与前沿](#未来与前沿)
- [已归档/历史](#已归档历史)
- [贡献](#贡献)
- [统计信息](#统计信息)

---

## Quick Start

初次使用请从下方「官方资源」与「学习资源」入手，并在 Sandcastle 中动手练习；框架与示例链接见「框架集成」与「开源项目」。

## 官方资源

- [Cesium官网](https://cesium.com/) - Cesium 官方网站，包含文档和资源.
- [CesiumJS库](https://cesium.com/cesiumjs/) - 用于 3D 地球和地图的主要 JavaScript 库.
- 官方文档 - 完整文档、教程与 API 参考（入口见上文 Quick Start）。
- 官方示例 - 交互式代码示例与演示（Sandcastle）。
- [GitHub仓库](https://github.com/CesiumGS/cesium) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium?style=flat&logo=github) - CesiumJS 官方开源仓库.
- [Cesium Native](https://github.com/CesiumGS/cesium-native) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-native?style=flat&logo=github) - 基础 C++ 库，用于 3D Tiles、地形和地理空间处理，驱动 Cesium for Unreal、Unity 和 Omniverse.
- [3D Tiles规范](https://github.com/CesiumGS/3d-tiles) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles?style=flat&logo=github) - 流式 3D 地理空间内容的开放规范.

## 社区

- [社区论坛](https://community.cesium.com/) - 官方社区论坛，用于问题讨论和公告.
- [Discord](https://discord.gg/cesium) - 实时聊天和社区讨论.
- [Reddit](https://www.reddit.com/r/cesium/) - 社区讨论和新闻.

## 学习资源

### 教程

- CesiumJS 官方教程 - 面向初学者的循序渐进教程和学习资源（入口见上文 Quick Start）。

### 博客

- [Cesium官方博客](https://cesium.com/blog/) - 最新新闻、功能、技术见解和真实案例.

### 视频

- [Cesium YouTube频道](https://www.youtube.com/cesium) - 官方教程、演示和会议演讲.

### 书籍

CesiumJS 三维地理空间可视化相关书目链接待补充。

## 框架集成

### Angular

- [cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example) - ![GitHub stars](https://img.shields.io/github/stars/Developer-Plexscape/cesium-angular-example?style=flat&logo=github) - 与最新版本Angular的集成示例.

### Vue

- [vue-cesium](https://github.com/zouyaoji/vue-cesium) - ![GitHub stars](https://img.shields.io/github/stars/zouyaoji/vue-cesium?style=flat&logo=github) 🌟 - Vue 3.x的CesiumJS组件，支持全面的第三方库.
- [cesium-vue3-vite](https://github.com/tingyuxuan2302/cesium-vue3-vite) - ![GitHub stars](https://img.shields.io/github/stars/tingyuxuan2302/cesium-vue3-vite?style=flat&logo=github) - Vue 3 + Vite + Cesium 模板，包含常见三维可视化场景.

### React

- [resium](https://github.com/reearth/resium) - ![GitHub stars](https://img.shields.io/github/stars/reearth/resium?style=flat&logo=github) 🌟 - 支持TypeScript和声明式API的Cesium React组件.

## 游戏引擎集成

- [3D Tiles for Godot](https://godotengine.org/asset-library/asset/2807) - 为Godot引擎提供3D Tiles支持的官方插件（2025年由Battle Road发布）.
- [cesium-unreal](https://github.com/CesiumGS/cesium-unreal) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unreal?style=flat&logo=github) 🌟 - 将3D地理空间生态系统引入虚幻引擎.
- [cesium-unity](https://github.com/CesiumGS/cesium-unity) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unity?style=flat&logo=github) 🌟 - 为Unity提供高精度3D地理空间内容，v1.20.0 起支持 Web 部署.

## 数据处理

### 地形构建

- [ctb-quantized-mesh](https://github.com/ahuarte47/cesium-terrain-builder) - 增强版 cesium-terrain-builder，支持 quantized-mesh 地形格式.

### 3D模型转换

- [3dtiles](https://github.com/fanvanzh/3dtiles) - ![GitHub stars](https://img.shields.io/github/stars/fanvanzh/3dtiles?style=flat&logo=github) 🌟 - 快速转换 OSGB、Shapefile、FBX 为 3D Tiles.
- [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/gltf-pipeline?style=flat&logo=github) 🌟 - 官方 glTF 优化管道，用于 3D Tiles 和 Cesium.
- [glTF-Transform](https://github.com/donmccurdy/glTF-Transform) - ![GitHub stars](https://img.shields.io/github/stars/donmccurdy/glTF-Transform?style=flat&logo=github) 🌟 - glTF 2.0 SDK，支持优化、压缩与转换.
- [obj2gltf](https://github.com/CesiumGS/obj2gltf) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/obj2gltf?style=flat&logo=github) - 官方 Node.js 工具，将 OBJ 转为 glTF 2.0.
- [citygml-to-3dtiles](https://github.com/njam/citygml-to-3dtiles) - CityGML 转 Cesium 3D Tiles 的实验性转换器.
- [glTF-Blender-IO](https://github.com/KhronosGroup/glTF-Blender-IO) - ![GitHub stars](https://img.shields.io/github/stars/KhronosGroup/glTF-Blender-IO?style=flat&logo=github) 🌟 - Blender 官方 glTF 2.0 导入/导出插件，3D Tiles 模型制作的必备工具.
- [spz](https://github.com/CesiumGS/spz) - 开源 SPZ 3D 高斯泼溅文件格式，比 PLY 小约 10 倍，视觉质量几乎无损。由 Niantic Labs 提供.

## 库和插件

### 用户界面

> （欢迎贡献活跃维护的 UI 插件。）

### 数据管理

构建和打包指南请参见 Cesium 官方文档（Learn 栏目）。

### 数据可视化

- [ol-cesium](https://github.com/openlayers/ol-cesium) - ![GitHub stars](https://img.shields.io/github/stars/openlayers/ol-cesium?style=flat&logo=github) 🌟 - OpenLayers 与 Cesium 集成，支持 2D/3D 地图切换.
- [3DTilesRendererJS](https://github.com/NASA-AMMOS/3DTilesRendererJS) - ![GitHub stars](https://img.shields.io/github/stars/NASA-AMMOS/3DTilesRendererJS?style=flat&logo=github) - Three.js 的 3D Tiles 渲染器.
- [cesium-webxr](https://github.com/pupitetris/cesium-webxr) - ![GitHub stars](https://img.shields.io/github/stars/pupitetris/cesium-webxr?style=flat&logo=github) - POC：现代 WebXR 支持.

### 数据提供者

- [Cesium-GeoserverTerrainProvider](https://github.com/kaktus40/Cesium-GeoserverTerrainProvider) - GeoServer 集成，支持多种高程数据格式.

### 材质与着色器效果

> （欢迎贡献活跃维护的材质插件。）

### GPS与跟踪

- [cesium-gpx-viewer](https://github.com/Duckiduc/cesium-gpx-viewer) - ![GitHub stars](https://img.shields.io/github/stars/Duckiduc/cesium-gpx-viewer?style=flat&logo=github) - 基于 React.js 的 GPS 轨迹 GPX 查看器.

### 输入与交互

> （欢迎贡献活跃维护的交互插件。）

## 性能与优化

构建和包优化请参见 Cesium 官方文档（Learn 栏目）。

## AI 集成

Cesium 生态正在快速与 AI 系统集成。本节涵盖 MCP 服务器、Agent 技能和 AI 辅助地理空间工作流。

### MCP 服务器

- [cesium-ai-integrations](https://github.com/CesiumGS/cesium-ai-integrations) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-ai-integrations?style=flat&logo=github) - Cesium 官方的 MCP 服务器、应用和 Agent 技能集合，连接 AI 系统与 CesiumJS.
- [cesium-mcp](https://github.com/gaopengbin/cesium-mcp) - ![GitHub stars](https://img.shields.io/github/stars/gaopengbin/cesium-mcp?style=flat&logo=github) - 社区 MCP 桥接，提供 58 个工具，支持相机控制、实体管理、3D Tiles、地形、影像图层和空间分析，支持 stdio 和 WebSocket 模式.

### Agent 技能与工具

- [cesium-vscode](https://github.com/CesiumGS/cesium-vscode) - CesiumJS 官方 VS Code 扩展.
- [Context7 Cesium Server](https://context7.com/) - MCP 服务器，为 AI 工具提供实时 CesiumJS 文档和 API 参考，减少幻觉.

## SDK与开发框架

- [dc-sdk](https://github.com/dvt3d/dc-sdk) - ![GitHub stars](https://img.shields.io/github/stars/dvt3d/dc-sdk?style=flat&logo=github) 🌟 - 面向快速开发和部署的 WebGIS 应用框架.
- [mars3d](https://github.com/marsgis/mars3d) - ![GitHub stars](https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github) 🌟 - Mars3D 平台，B/S 架构 3D 客户端开发.

## 开源项目

- [Cesium-Examples](https://github.com/jiawanlong/Cesium-Examples) - ![GitHub stars](https://img.shields.io/github/stars/jiawanlong/Cesium-Examples?style=flat&logo=github) 🌟 - 200+ CesiumJS 示例，含分析、可视化、数据加载等.

## 应用案例

- [satellite-js](https://github.com/shashwatak/satellite-js) - ![GitHub stars](https://img.shields.io/github/stars/shashwatak/satellite-js?style=flat&logo=github) - 基于TLE数据的卫星轨道计算库，常与Cesium配合用于轨道可视化.
- [satvis](https://github.com/Flowm/satvis) - ![GitHub stars](https://img.shields.io/github/stars/Flowm/satvis?style=flat&logo=github) - 高级卫星轨道可视化和过境预测.
- [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field) - ![GitHub stars](https://img.shields.io/github/stars/RaymanNg/3D-Wind-Field?style=flat&logo=github) - Cesium地球上的3D风场可视化.
- [TerriaJS](https://github.com/TerriaJS/terriajs) - ![GitHub stars](https://img.shields.io/github/stars/TerriaJS/terriajs?style=flat&logo=github) - 构建丰富地理空间2D/3D数据平台的库，支持Cesium.
- [MapStore2](https://github.com/geosolutions-it/MapStore2) - ![GitHub stars](https://img.shields.io/github/stars/geosolutions-it/MapStore2?style=flat&logo=github) - 开源框架，支持创建和共享地图、仪表盘和地理故事，集成 Cesium 3D 支持.
- [SuperMap iClient-JavaScript](https://github.com/SuperMap/iClient-JavaScript) - ![GitHub stars](https://img.shields.io/github/stars/SuperMap/iClient-JavaScript?style=flat&logo=github) - 现代 GIS Web 客户端，支持 Leaflet、OpenLayers、MapboxGL 和 CesiumJS，集成 ECharts、D3 和 MapV.

## 展示案例

- [Cesium Sandcastle](https://sandcastle.cesium.com/) - Cesium 功能和能力的官方交互式展示.
- Cesium ion - 3D 内容流式传输、摄影测量、地形与真实世界数据的云平台（账号与面板见 ion.cesium.com）。

## 数据源与平台

- [Cesium Ion](https://ion.cesium.com/) - 3D 地理空间内容的流式传输、托管与处理云平台；含地形、影像、3D Tiles、摄影测量.
- [OpenStreetMap](https://www.openstreetmap.org/) - 提供全球地图数据的协作平台.
- [Natural Earth](https://www.naturalearthdata.com/) - 公共领域地图数据集.
- [PMTiles](https://github.com/protomaps/PMTiles) - ![GitHub stars](https://img.shields.io/github/stars/protomaps/PMTiles?style=flat&logo=github) - 单文件地图瓦片格式，支持离线部署和静态托管，兼容 Cesium.

## 工具

- [3d-tiles-validator](https://github.com/CesiumGS/3d-tiles-validator) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles-validator?style=flat&logo=github) - 官方3D Tiles瓦片集校验工具.
- [3d-tiles-samples](https://github.com/CesiumGS/3d-tiles-samples) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles-samples?style=flat&logo=github) - 用于学习和测试3D Tiles的示例瓦片集.
- [spz-loader](https://github.com/CesiumGS/spz-loader) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/spz-loader?style=flat&logo=github) - 官方 .spz 3D 高斯泼溅格式加载器.
- cesium-vscode - CesiumJS 官方 VS Code 扩展，链接见上文「Agent 技能与工具」。
- [cesiumjs-workshop](https://github.com/CesiumGS/cesiumjs-workshop) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesiumjs-workshop?style=flat&logo=github) - 2025 Cesium 开发者大会深度研讨材料.
- CesiumJS 构建和打包说明请参见官方文档（Quick Start 一节）。

## 生态系统

- [cesium-omniverse](https://github.com/CesiumGS/cesium-omniverse) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-omniverse?style=flat&logo=github) - NVIDIA Omniverse 平台的 Cesium 连接器.
- 参见上文「游戏引擎集成」与「未来与前沿」章节。

## 未来与前沿

> 塑造 Cesium 生态的技术与方向。

AI 与 MCP：官方与社区 MCP 集成见上文「AI 集成」一节。

3D 高斯泼溅：SPZ 与 spz-loader 已列于「数据处理」与「工具」。

3D Tiles Next：流式规范演进；实验性支持请关注 Cesium 官方博客。

Cesium ion：流式传输、瓦片化、摄影测量与托管；详情见上文「数据源与平台」。

游戏引擎：Unity、Unreal、Godot 集成见上文「游戏引擎集成」。

Omniverse 与 WebXR：连接器与 WebXR POC 已列于「生态系统」与「库和插件」。

## 已归档/历史

> 以下资源 24 个月以上未维护，仅供参考，使用需谨慎。

### 地形与数据处理

- [cesium-terrain-builder](https://github.com/geo-data/cesium-terrain-builder) - （2021 归档）C++ 地形瓦片库.
- [Cesium Terrain Server](https://github.com/geo-data/cesium-terrain-server) - （2021 归档）基于文件系统的地形服务.
- [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF) - （2020 归档）COLLADA 转 glTF.
- [cesium-point-cloud-generator](https://github.com/tum-gis/cesium-point-cloud-generator) - （2021 归档）Java 点云工具.

### 插件与 UI

- [cesium-plugins](https://github.com/syzdev/cesium-plugins) - （2021 归档）坐标拾取、洪水分析、覆盖层.
- [Cesium-Plugin](https://github.com/bingqixuan/Cesium-Plugin) - （2021 归档）测量、上下文菜单.
- [CesiumVectorTile](https://github.com/MikesWei/CesiumVectorTile) - （2021 归档）矢量瓦片提供者.
- [cesium-drawhelper](https://github.com/leforthomas/cesium-drawhelper) - （2016 归档）形状编辑器.
- [CesiumExp-measure](https://github.com/gitgitczl/CesiumExp-measure) - （2021 归档）测量插件.
- [CesiumMeshVisualizer](https://github.com/MikesWei/CesiumMeshVisualizer) - （2021 归档）Cesium 中的 Three.js 几何体.
- [CesiumRoadImageFlowMaterial](https://github.com/WaterSeeding/CesiumRoadImageFlowMaterial) - （2022 归档）道路流动材质.

### 示例与演示

- [Cesium.HPUZYZ.Demo](https://github.com/YanzheZhang/Cesium.HPUZYZ.Demo) - （2021 归档）示例仓库.
- [ExamplesforCesium](https://github.com/pasu/ExamplesforCesium) - （2022 归档）示例仓库.
- [Nick_Learns_CesiumJS](https://github.com/Ice-and-Rock/Nick_Learns_CesiumJS) - （2022 归档）示例仓库.
- [Gesture-Controlled-3D-World](https://github.com/ps428/Gesture-Controlled-3D-World) - （2021 归档）示例仓库.

### 已移除（不再列出）

- 本列表已移除：*angular-cesium* (2019)、*cesium-vue* (2018)、*d3cesium* (2015)、*cesium-vr* (2015)。详见 Git 历史。

## 贡献

欢迎您的贡献！请先查看[贡献指南](CONTRIBUTING.md)。

**如何贡献：**

- 若觉得有用，欢迎为本仓库点星。
- 报告问题或失效链接。
- 建议新资源或分类。
- 提交改进的 Pull Request。

**添加新资源的指南：**
- 确保资源与Cesium直接相关
- 检查项目有良好的文档和维护
- 包含简短、清晰的功能描述
- 在适当的地方添加相应的徽章（星数、活动状态）

如果您看到此处列出的包或项目不再维护或不合适，请提交Pull Request来改进此文件。谢谢！

---

## 统计信息

> 最后更新：2026年4月  
> 活跃资源：45+  
> 已归档：14  
> 分类数：14  

**图例说明：** **推荐** 表示活跃维护、广泛使用、面向未来（条目中可能以星标标出）；适合学习的条目可作为入门参考；已弃用资源见「已归档/历史」一节。

主列表仅含活跃维护资源，基于 CesiumJS 1.x（当前 1.140）。详见[收录标准](docs/INCLUSION_CRITERIA.zh.md)。

---

**Language / 语言：** [English](README.md) | [简体中文](readme-zh.md)
