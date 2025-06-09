# Awesome Cesium

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/reed-soul/awesome-cesium.svg?style=social&label=Star)](https://github.com/reed-soul/awesome-cesium)
[![GitHub forks](https://img.shields.io/github/forks/reed-soul/awesome-cesium.svg?style=social&label=Fork)](https://github.com/reed-soul/awesome-cesium)
[![GitHub watchers](https://img.shields.io/github/watchers/reed-soul/awesome-cesium.svg?style=social&label=Watch)](https://github.com/reed-soul/awesome-cesium)

> 精选的 [Cesium](https://cesium.com/) 相关库、资源和其他优秀内容的清单。

[CesiumJS](https://cesium.com/cesiumjs/) 是一个开源的 JavaScript 库，用于在 Web 浏览器中创建世界级的 3D 地球和地图，具有最佳性能、精度、视觉质量和易用性。

**🌐 Language/语言:** [English](README.md) | [简体中文](README.zh.md)

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
  - [图形渲染](#图形渲染)
  - [数据管理](#数据管理)
  - [数据可视化](#数据可视化)
  - [数据提供者](#数据提供者)
  - [数据处理与转换](#数据处理与转换)
  - [绘图与绘制](#绘图与绘制)
  - [编辑工具](#编辑工具)
  - [材质与着色器效果](#材质与着色器效果)
  - [GPS与跟踪](#gps与跟踪)
  - [输入与交互](#输入与交互)
- [性能与优化](#性能与优化)
- [分析与模拟](#分析与模拟)
- [SDK与开发框架](#sdk与开发框架)
- [开源项目](#开源项目)
- [应用案例](#应用案例)
- [展示案例](#展示案例)
- [数据源](#数据源)
- [工具](#工具)
- [生态系统](#生态系统)
- [贡献](#贡献)

---

## 官方资源

*   [Cesium官网](https://cesium.com/) - Cesium官方网站，包含文档和资源
*   [CesiumJS库](https://cesium.com/cesiumjs/) - 用于3D地球和地图的主要JavaScript库
*   [官方文档](https://cesium.com/learn/cesiumjs-learn/) - 完整的文档、教程和API参考
*   [官方示例](https://sandcastle.cesium.com/) - 交互式代码示例和演示
*   [GitHub仓库](https://github.com/CesiumGS/cesium) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium?style=flat&logo=github) - CesiumJS官方开源仓库

## 社区

*   [社区论坛](https://community.cesium.com/) - 官方社区论坛，用于问题讨论和公告
*   [Discord](https://discord.gg/cesium) - 实时聊天和社区讨论
*   [Reddit](https://www.reddit.com/r/cesium/) - 社区讨论和新闻

## 学习资源

### 教程

*   [CesiumJS官方教程](https://cesium.com/learn/cesiumjs-tutorials/) - 面向初学者的循序渐进教程
*   [CesiumJS中文教程](https://github.com/cesiumcn/cesiumcn.github.io) - Cesium中文网提供的官方教程，包含实用示例

### 博客

*   [Cesium官方博客](https://cesium.com/blog/) - 最新新闻、功能和技术见解
*   [Cesium案例故事](https://cesium.com/blog/cesium-stories/) - 真实世界的使用案例和成功故事

### 视频

*   [Cesium YouTube频道](https://www.youtube.com/c/CesiumEngine) - 官方教程、演示和会议演讲

### 书籍

*   *[CesiumJS 3D地理空间可视化]* - （有可用书籍时添加链接）

## 框架集成

### Angular

*   [cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example) ![GitHub stars](https://img.shields.io/github/stars/Developer-Plexscape/cesium-angular-example?style=flat&logo=github) - 与最新版本Angular的集成示例
*   [angular-cesium](https://github.com/Anka-Geo/angular-cesium) ![GitHub stars](https://img.shields.io/github/stars/Anka-Geo/angular-cesium?style=flat&logo=github) - 完整的Angular集成指南，包含详细设置说明

### Vue

*   [vue-cesium](https://github.com/zouyaoji/vue-cesium) ![GitHub stars](https://img.shields.io/github/stars/zouyaoji/vue-cesium?style=flat&logo=github) - Vue 3.x的CesiumJS组件，支持全面的第三方库
*   [cesium-vue](https://github.com/weshmily/cesium-vue) - 基于Vue CLI 4.x.x+的Cesium开发模板

### React

*   [resium](https://github.com/reearth/resium) ![GitHub stars](https://img.shields.io/github/stars/reearth/resium?style=flat&logo=github) - 支持TypeScript和声明式API的Cesium React组件
*   [cesium_demos](https://github.com/YanzheZhang/cesium_demos) - 展示Cesium与React和TypeScript集成的演示应用

## 游戏引擎集成

*   [3D Tiles for Godot](https://godotengine.org/asset-library/asset/2807) - 为Godot引擎提供3D Tiles支持的官方插件（2025年由Battle Road发布）
*   [cesium-unreal](https://github.com/CesiumGS/cesium-unreal) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unreal?style=flat&logo=github) - 将3D地理空间生态系统引入虚幻引擎
*   [cesium-unity](https://github.com/CesiumGS/cesium-unity) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unity?style=flat&logo=github) - 为Unity提供高精度3D地理空间内容

## 数据处理

### 地形构建

*   [cesium-terrain-builder](https://github.com/geo-data/cesium-terrain-builder) ![GitHub stars](https://img.shields.io/github/stars/geo-data/cesium-terrain-builder?style=flat&logo=github) - 用于创建地形瓦片的C++库和命令行工具
*   [ctb-quantized-mesh](https://github.com/ahuarte47/cesium-terrain-builder) - 支持quantized-mesh格式以获得更好性能的增强版本
*   [gdal2cesium](https://github.com/homme/gdal2cesium) ![GitHub stars](https://img.shields.io/github/stars/homme/gdal2cesium?style=flat&logo=github) - 基于GDAL的Python工具，用于生成地形高度图瓦片
*   [Cesium Terrain Server](https://github.com/geo-data/cesium-terrain-server) ![GitHub stars](https://img.shields.io/github/stars/geo-data/cesium-terrain-server?style=flat&logo=github) - 用于提供基于文件系统的地形瓦片集的服务器
*   [mbtiles-terrain-server](https://github.com/klokantech/mbtiles-terrain-server) - 将地形瓦片导入SQLite数据库以高效提供服务的服务器

### 3D模型转换

*   [3dtiles](https://github.com/fanvanzh/3dtiles) ![GitHub stars](https://img.shields.io/github/stars/fanvanzh/3dtiles?style=flat&logo=github) - 快速转换OSGB、Shapefile和FBX为3D Tiles的工具
*   [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF) ![GitHub stars](https://img.shields.io/github/stars/KhronosGroup/COLLADA2GLTF?style=flat&logo=github) - Khronos官方工具，用于将COLLADA(.dae)文件转换为glTF
*   [gltf-to-3dtiles](https://github.com/fanvanzh/gltf-to-3dtiles) - 将glTF/GLB文件转换为3D Tiles格式的命令行工具
*   [obj2gltf](https://github.com/CesiumGS/obj2gltf) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/obj2gltf?style=flat&logo=github) - 用于将OBJ资源转换为glTF 2.0的官方Node.js工具
*   [objTo3d-tiles](https://github.com/fanvanzh/objTo3d-tiles) - 将OBJ模型转换为3D Tiles的Node.js工具
*   [citygml-to-3dtiles](https://github.com/njam/citygml-to-3dtiles) - 将CityGML转换为Cesium 3D Tiles的实验性转换器
*   [cesium_pnt_generator](https://github.com/tum-gis/cesium_pnt_generator) ![GitHub stars](https://img.shields.io/github/stars/tum-gis/cesium_pnt_generator?style=flat&logo=github) - 将LiDAR LAS数据集转换为Cesium点云瓦片
*   [cesium-point-cloud-generator](https://github.com/tum-gis/cesium-point-cloud-generator) - 基于Java的点云可视化工具，使用3D Tiles

## 库和插件

### 用户界面

*   [cesium-navigation](https://github.com/calvinmetcalf/cesium-navigation) ![GitHub stars](https://img.shields.io/github/stars/calvinmetcalf/cesium-navigation?style=flat&logo=github) - 导航控件，包括指南针、缩放和距离比例尺
*   [CesiumContextMenu](https://github.com/oldguysrule/CesiumContextMenu) - 右键上下文菜单插件，增强用户交互
*   [cesium-plugins](https://github.com/syzdev/cesium-plugins) ![GitHub stars](https://img.shields.io/github/stars/syzdev/cesium-plugins?style=flat&logo=github) - 实用插件集合，包含坐标拾取、工具提示和覆盖层
*   [Cesium-Plugin](https://github.com/bingqixuan/Cesium-Plugin) - 功能丰富的插件，带有测量工具、上下文菜单和视觉效果

### 图形渲染

*   [cesium-sensor-volumes](https://github.com/AnalyticalGraphicsInc/cesium-sensor-volumes) - 用于渲染3D传感器体积和覆盖区域的插件

### 数据管理

*   [cesium-webpack-plugin](https://github.com/CesiumGS/cesium-webpack-plugin) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-webpack-plugin?style=flat&logo=github) - 用于构建Cesium应用程序的官方Webpack插件

### 数据可视化

*   [CesiumHeatmap](https://github.com/MikesWei/CesiumHeatmap) ![GitHub stars](https://img.shields.io/github/stars/MikesWei/CesiumHeatmap?style=flat&logo=github) - 使用heatmap.js进行数据可视化的热力图库
*   [d3cesium](https://github.com/abwood/d3cesium) - 结合Cesium与D3.js进行高级数据可视化的集成演示
*   [CesiumMeshVisualizer](https://github.com/MikesWei/CesiumMeshVisualizer) ![GitHub stars](https://img.shields.io/github/stars/MikesWei/CesiumMeshVisualizer?style=flat&logo=github) - 在Cesium中使用Three.js几何体和高级网格管理
*   [ol-cesium](https://github.com/openlayers/ol-cesium) ![GitHub stars](https://img.shields.io/github/stars/openlayers/ol-cesium?style=flat&logo=github) - OpenLayers与Cesium的集成，支持2D/3D地图切换
*   [cesium-webxr](https://github.com/pupitetris/cesium-webxr) ![GitHub stars](https://img.shields.io/github/stars/pupitetris/cesium-webxr?style=flat&logo=github) - POC：现代WebXR支持，提供沉浸式VR/AR体验
*   [cesium-vr](https://github.com/NICTA/cesium-vr) ⚠️ **[已过时 - 2015]** - Oculus头戴设备VR插件（需要已废弃的WebVR和Cesium 1.10）

### 数据提供者

*   [CesiumVectorTile](https://github.com/MikesWei/CesiumVectorTile) - 用于在地形上渲染矢量数据的矢量瓦片影像提供者
*   [WCSTerrainProvider](https://github.com/kaktus40/WCSTerrainProvider) - 用于高程数据的Web覆盖服务地形提供者
*   [Cesium-GeoserverTerrainProvider](https://github.com/kaktus40/Cesium-GeoserverTerrainProvider) - GeoServer集成，支持各种高程数据格式

### 数据处理与转换

*   [cesium-geolibs](https://github.com/AnalyticalGraphicsInc/cesium-geolibs) - 用于将地理空间数据转换为Cesium格式的工具集合

### 绘图与绘制

*   [cesium-drawhelper](https://github.com/leforthomas/cesium-drawhelper) ![GitHub stars](https://img.shields.io/github/stars/leforthomas/cesium-drawhelper?style=flat&logo=github) - 用于创建和编辑2D几何图形的形状编辑器
*   [CesiumExp-measure](https://github.com/gitgitczl/CesiumExp-measure) - 用于距离、面积和方位角计算的测量插件
*   [drawForCesium](https://github.com/hujiulong/drawForCesium) - 基于drawhelper插件的动态绘图功能

### 编辑工具

*   [cesium-drawhelper](https://github.com/leforthomas/cesium-drawhelper) - 早期阶段的简单几何图形形状编辑器（目前支持2D形状）

### 材质与着色器效果

*   [CesiumRoadImageFlowMaterial](https://github.com/WaterSeeding/CesiumRoadImageFlowMaterial) ![GitHub stars](https://img.shields.io/github/stars/WaterSeeding/CesiumRoadImageFlowMaterial?style=flat&logo=github) - 带动画效果的自定义道路图像流动材质

### GPS与跟踪

*   [cesium-gpx-viewer](https://github.com/Duckiduc/cesium-gpx-viewer) ![GitHub stars](https://img.shields.io/github/stars/Duckiduc/cesium-gpx-viewer?style=flat&logo=github) - 使用React.js构建的GPS轨迹可视化GPX文件查看器
*   [Nick_Learns_CesiumJS](https://github.com/Ice-and-Rock/Nick_Learns_CesiumJS) - 演示实时跟踪功能的飞行跟踪器示例项目

### 输入与交互

*   [Gesture-Controlled-3D-World](https://github.com/ps428/Gesture-Controlled-3D-World) ![GitHub stars](https://img.shields.io/github/stars/ps428/Gesture-Controlled-3D-World?style=flat&logo=github) - 通过MediaPipe计算机视觉使用手势导航Cesium地球

## 性能与优化

*   [cesium-webpack-plugin](https://github.com/CesiumGS/cesium-webpack-plugin) - Webpack优化插件，用于减少包大小和提高加载时间

## 分析与模拟

*   [cesium-plugins](https://github.com/syzdev/cesium-plugins) - 包含洪水分析、动态水面和环境模拟工具

## SDK与开发框架

*   [dc-sdk](https://github.com/dvgis/dc-sdk) ![GitHub stars](https://img.shields.io/github/stars/dvgis/dc-sdk?style=flat&logo=github) - 为快速开发和部署优化的WebGIS应用程序框架
*   [mars3d](http://mars3d.cn/) - Mars3D平台，用于B/S架构3D客户端开发，带有行业扩展

## 开源项目

*   [Cesium.HPUZYZ.Demo](https://github.com/YanzheZhang/Cesium.HPUZYZ.Demo) ![GitHub stars](https://img.shields.io/github/stars/YanzheZhang/Cesium.HPUZYZ.Demo?style=flat&logo=github) - Cesium演示和示例的综合集合
*   [ExamplesforCesium](https://github.com/pasu/ExamplesforCesium) ![GitHub stars](https://img.shields.io/github/stars/pasu/ExamplesforCesium?style=flat&logo=github) - Cesium开发的个人示例和教程

## 应用案例

*   [cesium-satellites](https://github.com/shashwatak/satellite-js) ![GitHub stars](https://img.shields.io/github/stars/shashwatak/satellite-js?style=flat&logo=github) - 使用TLE数据进行卫星轨道可视化
*   [satvis](https://github.com/Flowm/satvis) ![GitHub stars](https://img.shields.io/github/stars/Flowm/satvis?style=flat&logo=github) - 高级卫星轨道可视化和过境预测
*   [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field) ![GitHub stars](https://img.shields.io/github/stars/RaymanNg/3D-Wind-Field?style=flat&logo=github) - Cesium地球上的3D风场可视化
*   [Wind-Field-Cesium](https://github.com/ningsk/Wind-Field-Cesium) - 具有可自定义颜色配置的增强风场可视化

## 展示案例

*   [Cesium Sandcastle](https://sandcastle.cesium.com/) - Cesium功能和能力的官方交互式展示
*   [Cesium ion](https://ion.cesium.com/) - 展示真实世界3D内容流的云平台

## 数据源

*   [Cesium Ion](https://ion.cesium.com/) - 用于流式传输和托管3D地理空间内容的云平台
*   [OpenStreetMap](https://www.openstreetmap.org/) - 提供全球地图数据的协作地图平台
*   [Natural Earth](https://www.naturalearthdata.com/) - 制图师的公共领域地图数据集

## 工具

*   [cesium-webpack-plugin](https://github.com/CesiumGS/cesium-webpack-plugin) - Cesium应用程序开发的必备Webpack插件

## 生态系统

*   [cesium-unreal](https://github.com/CesiumGS/cesium-unreal) - 将3D地理空间能力引入虚幻引擎
*   [cesium-unity](https://github.com/CesiumGS/cesium-unity) - Unity开发的高精度3D地理空间内容
*   [cesium-omniverse](https://github.com/CesiumGS/cesium-omniverse) - NVIDIA Omniverse平台的Cesium连接器

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

> 最后更新：2025年1月  
> 总资源数：80+  
> 分类数：15  
> 贡献者：欢迎加入！

**图例说明：**
- 🌟 强烈推荐
- 🆕 最近添加/更新
- 📱 移动友好
- ⚡ 性能导向
- 📚 适合学习 