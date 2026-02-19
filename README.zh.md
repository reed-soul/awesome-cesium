# Awesome Cesium

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/reed-soul/awesome-cesium.svg?style=social&label=Star)](https://github.com/reed-soul/awesome-cesium)
[![GitHub forks](https://img.shields.io/github/forks/reed-soul/awesome-cesium.svg?style=social&label=Fork)](https://github.com/reed-soul/awesome-cesium)
[![GitHub watchers](https://img.shields.io/github/watchers/reed-soul/awesome-cesium.svg?style=social&label=Watch)](https://github.com/reed-soul/awesome-cesium)

> 精选的 [Cesium](https://cesium.com/) 相关库、资源和其他优秀内容的清单。

[CesiumJS](https://cesium.com/cesiumjs/) 是一个开源的 JavaScript 库，用于在 Web 浏览器中创建世界级的 3D 地球和地图，具有最佳性能、精度、视觉质量和易用性。

**🌐 Language/语言:** [English](README.md) | [简体中文](README.zh.md)

## 🚀 快速开始

初次使用 Cesium？从这里开始：

1. **[官方文档](https://cesium.com/learn/)** — 教程与 API 参考
2. **[Sandcastle](https://sandcastle.cesium.com/)** — 交互式代码示例
3. **框架**：Vue → [vue-cesium](https://github.com/zouyaoji/vue-cesium) 🌟 | React → [resium](https://github.com/reearth/resium) 🌟
4. **示例**：[Cesium-Examples](https://github.com/jiawanlong/Cesium-Examples) — 200+ 示例 🌟

## 目录

- [官方资源](#官方资源)
- [社区](#社区)
- [学习资源](#学习资源)
  - [教程](#教程)
  - [博客](#博客)
  - [视频](#视频)
  - [书籍](#书籍)
- [框架集成](#框架集成)
  - [Angular](#angular)
  - [Vue](#vue)
  - [React](#react)
- [游戏引擎集成](#游戏引擎集成)
- [数据处理](#数据处理)
  - [地形构建](#地形构建)
  - [3D模型转换](#3d模型转换)
- [库和插件](#库和插件)
  - [用户界面](#用户界面)
  - [数据管理](#数据管理)
  - [数据可视化](#数据可视化)
  - [数据提供者](#数据提供者)
  - [材质与着色器效果](#材质与着色器效果)
  - [GPS与跟踪](#gps与跟踪)
  - [输入与交互](#输入与交互)
- [性能与优化](#性能与优化)
- [SDK与开发框架](#sdk与开发框架)
- [开源项目](#开源项目)
- [应用案例](#应用案例)
- [展示案例](#展示案例)
- [数据源](#数据源)
- [工具](#工具)
- [生态系统](#生态系统)
- [已归档/历史](#已归档历史)
- [贡献](#贡献)

---

## 官方资源

*   [Cesium官网](https://cesium.com/) - Cesium官方网站，包含文档和资源
*   [CesiumJS库](https://cesium.com/cesiumjs/) - 用于3D地球和地图的主要JavaScript库
*   [官方文档](https://cesium.com/learn/) - 完整的文档、教程和API参考
*   [官方示例](https://sandcastle.cesium.com/) - 交互式代码示例和演示
*   [GitHub仓库](https://github.com/CesiumGS/cesium) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium?style=flat&logo=github) - CesiumJS官方开源仓库
*   [3D Tiles规范](https://github.com/CesiumGS/3d-tiles) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles?style=flat&logo=github) - 流式3D地理空间内容的开放规范

## 社区

*   [社区论坛](https://community.cesium.com/) - 官方社区论坛，用于问题讨论和公告
*   [Discord](https://discord.gg/cesium) - 实时聊天和社区讨论
*   [Reddit](https://www.reddit.com/r/cesium/) - 社区讨论和新闻

## 学习资源

### 教程

*   [CesiumJS官方教程](https://cesium.com/learn/) - 面向初学者的循序渐进教程和学习资源

### 博客

*   [Cesium官方博客](https://cesium.com/blog/) - 最新新闻、功能、技术见解和真实案例

### 视频

*   [Cesium YouTube频道](https://www.youtube.com/cesium) - 官方教程、演示和会议演讲

### 书籍

*   *[CesiumJS 3D地理空间可视化]* - （有可用书籍时添加链接）

## 框架集成

### Angular

*   [cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example) ![GitHub stars](https://img.shields.io/github/stars/Developer-Plexscape/cesium-angular-example?style=flat&logo=github) - 与最新版本Angular的集成示例

### Vue

*   [vue-cesium](https://github.com/zouyaoji/vue-cesium) ![GitHub stars](https://img.shields.io/github/stars/zouyaoji/vue-cesium?style=flat&logo=github) 🌟 - Vue 3.x的CesiumJS组件，支持全面的第三方库
*   [cesium-vue3-vite](https://github.com/tingyuxuan2302/cesium-vue3-vite) ![GitHub stars](https://img.shields.io/github/stars/tingyuxuan2302/cesium-vue3-vite?style=flat&logo=github) - Vue 3 + Vite + Cesium 模板，包含常见三维可视化场景

### React

*   [resium](https://github.com/reearth/resium) ![GitHub stars](https://img.shields.io/github/stars/reearth/resium?style=flat&logo=github) 🌟 - 支持TypeScript和声明式API的Cesium React组件

## 游戏引擎集成

*   [3D Tiles for Godot](https://godotengine.org/asset-library/asset/2807) - 为Godot引擎提供3D Tiles支持的官方插件（2025年由Battle Road发布）
*   [cesium-unreal](https://github.com/CesiumGS/cesium-unreal) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unreal?style=flat&logo=github) 🌟 - 将3D地理空间生态系统引入虚幻引擎
*   [cesium-unity](https://github.com/CesiumGS/cesium-unity) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unity?style=flat&logo=github) 🌟 - 为Unity提供高精度3D地理空间内容

## 数据处理

### 地形构建

*   [ctb-quantized-mesh](https://github.com/ahuarte47/cesium-terrain-builder) - cesium-terrain-builder 的增强版，支持 quantized-mesh 格式

### 3D模型转换

*   [3dtiles](https://github.com/fanvanzh/3dtiles) ![GitHub stars](https://img.shields.io/github/stars/fanvanzh/3dtiles?style=flat&logo=github) 🌟 - 快速转换 OSGB、Shapefile、FBX 为 3D Tiles
*   [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/gltf-pipeline?style=flat&logo=github) 🌟 - 官方 glTF 优化管道，用于 3D Tiles 和 Cesium
*   [glTF-Transform](https://github.com/donmccurdy/glTF-Transform) ![GitHub stars](https://img.shields.io/github/stars/donmccurdy/glTF-Transform?style=flat&logo=github) 🌟 - glTF 2.0 SDK，支持优化、压缩与转换
*   [obj2gltf](https://github.com/CesiumGS/obj2gltf) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/obj2gltf?style=flat&logo=github) - 官方 Node.js 工具，将 OBJ 转为 glTF 2.0
*   [citygml-to-3dtiles](https://github.com/njam/citygml-to-3dtiles) - CityGML 转 Cesium 3D Tiles 的实验性转换器

## 库和插件

### 用户界面

*（欢迎贡献活跃维护的 UI 插件。）*

### 数据管理

构建和打包指南请参见 [Cesium 文档](https://cesium.com/learn/)。

### 数据可视化

*   [ol-cesium](https://github.com/openlayers/ol-cesium) ![GitHub stars](https://img.shields.io/github/stars/openlayers/ol-cesium?style=flat&logo=github) 🌟 - OpenLayers 与 Cesium 集成，支持 2D/3D 地图切换
*   [3DTilesRendererJS](https://github.com/NASA-AMMOS/3DTilesRendererJS) ![GitHub stars](https://img.shields.io/github/stars/NASA-AMMOS/3DTilesRendererJS?style=flat&logo=github) - Three.js 的 3D Tiles 渲染器
*   [cesium-webxr](https://github.com/pupitetris/cesium-webxr) ![GitHub stars](https://img.shields.io/github/stars/pupitetris/cesium-webxr?style=flat&logo=github) - POC：现代 WebXR 支持

### 数据提供者

*   [Cesium-GeoserverTerrainProvider](https://github.com/kaktus40/Cesium-GeoserverTerrainProvider) - GeoServer 集成，支持多种高程数据格式

### 材质与着色器效果

*（欢迎贡献活跃维护的材质插件。）*

### GPS与跟踪

*   [cesium-gpx-viewer](https://github.com/Duckiduc/cesium-gpx-viewer) ![GitHub stars](https://img.shields.io/github/stars/Duckiduc/cesium-gpx-viewer?style=flat&logo=github) - 基于 React.js 的 GPS 轨迹 GPX 查看器

### 输入与交互

*（欢迎贡献活跃维护的交互插件。）*

## 性能与优化

构建和包优化请参见 [Cesium 文档](https://cesium.com/learn/)。

## SDK与开发框架

*   [dc-sdk](https://github.com/dvt3d/dc-sdk) ![GitHub stars](https://img.shields.io/github/stars/dvt3d/dc-sdk?style=flat&logo=github) 🌟 - 面向快速开发和部署的 WebGIS 应用框架
*   [mars3d](https://github.com/marsgis/mars3d) ![GitHub stars](https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github) 🌟 - Mars3D 平台，B/S 架构 3D 客户端开发

## 开源项目

*   [Cesium-Examples](https://github.com/jiawanlong/Cesium-Examples) ![GitHub stars](https://img.shields.io/github/stars/jiawanlong/Cesium-Examples?style=flat&logo=github) 🌟 - 200+ CesiumJS 示例，含分析、可视化、数据加载等

## 应用案例

*   [satellite-js](https://github.com/shashwatak/satellite-js) ![GitHub stars](https://img.shields.io/github/stars/shashwatak/satellite-js?style=flat&logo=github) - 基于TLE数据的卫星轨道计算库，常与Cesium配合用于轨道可视化
*   [satvis](https://github.com/Flowm/satvis) ![GitHub stars](https://img.shields.io/github/stars/Flowm/satvis?style=flat&logo=github) - 高级卫星轨道可视化和过境预测
*   [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field) ![GitHub stars](https://img.shields.io/github/stars/RaymanNg/3D-Wind-Field?style=flat&logo=github) - Cesium地球上的3D风场可视化
*   [TerriaJS](https://github.com/TerriaJS/terriajs) ![GitHub stars](https://img.shields.io/github/stars/TerriaJS/terriajs?style=flat&logo=github) - 构建丰富地理空间2D/3D数据平台的库，支持Cesium

## 展示案例

*   [Cesium Sandcastle](https://sandcastle.cesium.com/) - Cesium功能和能力的官方交互式展示
*   [Cesium ion](https://ion.cesium.com/) - 展示真实世界3D内容流的云平台

## 数据源

*   [Cesium Ion](https://ion.cesium.com/) - 用于流式传输和托管3D地理空间内容的云平台
*   [OpenStreetMap](https://www.openstreetmap.org/) - 提供全球地图数据的协作地图平台
*   [Natural Earth](https://www.naturalearthdata.com/) - 制图师的公共领域地图数据集

## 工具

*   [3d-tiles-validator](https://github.com/CesiumGS/3d-tiles-validator) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles-validator?style=flat&logo=github) - 官方3D Tiles瓦片集校验工具
*   [3d-tiles-samples](https://github.com/CesiumGS/3d-tiles-samples) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles-samples?style=flat&logo=github) - 用于学习和测试3D Tiles的示例瓦片集
*   CesiumJS 构建和打包说明请参见[官方文档](https://cesium.com/learn/)

## 生态系统

*   [cesium-omniverse](https://github.com/CesiumGS/cesium-omniverse) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-omniverse?style=flat&logo=github) - NVIDIA Omniverse 平台的 Cesium 连接器
*   Unity、Unreal、Godot 插件参见[游戏引擎集成](#游戏引擎集成)

## 已归档/历史

*以下资源 24 个月以上未维护，仅供参考，使用需谨慎。*

### 地形与数据处理
*   [cesium-terrain-builder](https://github.com/geo-data/cesium-terrain-builder) (2021) - C++ 地形瓦片库
*   [Cesium Terrain Server](https://github.com/geo-data/cesium-terrain-server) (2021) - 基于文件系统的地形服务
*   [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF) (2020) - COLLADA 转 glTF
*   [cesium-point-cloud-generator](https://github.com/tum-gis/cesium-point-cloud-generator) (2021) - Java 点云工具

### 插件与 UI
*   [cesium-plugins](https://github.com/syzdev/cesium-plugins) (2021) - 坐标拾取、洪水分析、覆盖层
*   [Cesium-Plugin](https://github.com/bingqixuan/Cesium-Plugin) (2021) - 测量、上下文菜单
*   [CesiumVectorTile](https://github.com/MikesWei/CesiumVectorTile) (2021) - 矢量瓦片提供者
*   [cesium-drawhelper](https://github.com/leforthomas/cesium-drawhelper) (2016) - 形状编辑器
*   [CesiumExp-measure](https://github.com/gitgitczl/CesiumExp-measure) (2021) - 测量插件
*   [CesiumMeshVisualizer](https://github.com/MikesWei/CesiumMeshVisualizer) (2021) - Cesium 中的 Three.js 几何体
*   [CesiumRoadImageFlowMaterial](https://github.com/WaterSeeding/CesiumRoadImageFlowMaterial) (2022) - 道路流动材质

### 示例与演示
*   [Cesium.HPUZYZ.Demo](https://github.com/YanzheZhang/Cesium.HPUZYZ.Demo) (2021)
*   [ExamplesforCesium](https://github.com/pasu/ExamplesforCesium) (2022)
*   [Nick_Learns_CesiumJS](https://github.com/Ice-and-Rock/Nick_Learns_CesiumJS) (2022)
*   [Gesture-Controlled-3D-World](https://github.com/ps428/Gesture-Controlled-3D-World) (2021)

### 已移除（不再列出）
*angular-cesium* (2019)、*cesium-vue* (2018)、*d3cesium* (2015)、*cesium-vr* (2015) — 参见 git 历史。

## 贡献

欢迎您的贡献！请先查看[贡献指南](CONTRIBUTING.md)。

**如何贡献：**
- 🌟 如果您觉得有用，请为此仓库点星
- 🐛 报告问题或损坏的链接
- 💡 建议新资源或分类
- 🔧 提交改进的Pull Request

**添加新资源的指南：**
- 确保资源与Cesium直接相关
- 检查项目有良好的文档和维护
- 包含简短、清晰的功能描述
- 在适当的地方添加相应的徽章（星数、活动状态）

如果您看到此处列出的包或项目不再维护或不合适，请提交Pull Request来改进此文件。谢谢！

---

## 统计信息

> 最后更新：2025年2月  
> 活跃资源：35+  
> 已归档：14  
> 分类数：12  

**图例说明：**
- 🌟 **推荐** — 活跃维护、广泛使用、面向未来
- 📚 适合学习
- 已弃用资源见[已归档/历史](#已归档历史)

*主列表仅含活跃维护资源，基于 CesiumJS 1.x。详见[收录标准](docs/INCLUSION_CRITERIA.zh.md)。* 