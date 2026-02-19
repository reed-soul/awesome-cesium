# Awesome Cesium

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/reed-soul/awesome-cesium.svg?style=social&label=Star)](https://github.com/reed-soul/awesome-cesium)
[![GitHub forks](https://img.shields.io/github/forks/reed-soul/awesome-cesium.svg?style=social&label=Fork)](https://github.com/reed-soul/awesome-cesium)
[![GitHub watchers](https://img.shields.io/github/watchers/reed-soul/awesome-cesium.svg?style=social&label=Watch)](https://github.com/reed-soul/awesome-cesium)

> A curated list of awesome [Cesium](https://cesium.com/) libraries, resources and other shiny things.

[CesiumJS](https://cesium.com/cesiumjs/) is an open-source JavaScript library for creating world-class 3D globes and maps with the best possible performance, precision, visual quality, and ease of use.

**🌐 Language/语言:** [English](README.md) | [简体中文](README.zh.md)

## Contents

- [Official Resources](#official-resources)
- [Community](#community)
- [Learning Resources](#learning-resources)
  - [Tutorials](#tutorials)
  - [Blogs](#blogs)
  - [Videos](#videos)
  - [Books](#books)
- [Framework Integration](#framework-integration)
  - [Angular](#angular)
  - [Vue](#vue)
  - [React](#react)
- [Game Engine Integration](#game-engine-integration)
- [Data Processing](#data-processing)
  - [Terrain Building](#terrain-building)
  - [3D Model Converting](#3d-model-converting)
- [Libraries & Plugins](#libraries--plugins)
  - [UI](#ui)
  - [Graphics](#graphics)
  - [Data Management](#data-management)
  - [Data Visualization](#data-visualization)
  - [Data Providers](#data-providers)
  - [Data Processing & Conversion](#data-processing--conversion)
  - [Plotting & Drawing](#plotting--drawing)
  - [Editor Tools](#editor-tools)
  - [Material & Shader Effects](#material--shader-effects)
  - [GPS & Tracking](#gps--tracking)
- [Performance & Optimization](#performance--optimization)
- [Analysis & Simulation](#analysis--simulation)
- [SDK & Development Frameworks](#sdk--development-frameworks)
- [Open Source Projects](#open-source-projects)
- [Applications](#applications)
- [Showcases](#showcases)
- [Data Sources](#data-sources)
- [Tools](#tools)
- [Ecosystem](#ecosystem)
- [Contributing](#contributing)

---

## Official Resources

*   [Official Website](https://cesium.com/) - The official Cesium website with documentation and resources.
*   [CesiumJS Library](https://cesium.com/cesiumjs/) - The main JavaScript library for 3D globes and maps.
*   [Documentation](https://cesium.com/learn/) - Comprehensive documentation, tutorials, and API reference.
*   [Official Examples](https://sandcastle.cesium.com/) - Interactive code examples and demos.
*   [GitHub Repository](https://github.com/CesiumGS/cesium) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium?style=flat&logo=github) - The official open-source CesiumJS repository.

## Community

*   [Community Forum](https://community.cesium.com/) - Official community forum for questions, discussions, and announcements.
*   [Discord](https://discord.gg/cesium) - Real-time chat and community discussions.
*   [Reddit](https://www.reddit.com/r/cesium/) - Community discussions and news.

## Learning Resources

### Tutorials

*   [Official CesiumJS Tutorials](https://cesium.com/learn/) - Step-by-step tutorials and learning resources for beginners.

### Blogs

*   [Official Cesium Blog](https://cesium.com/blog/) - Latest news, features, technical insights, and real-world use cases.

### Videos

*   [Cesium YouTube Channel](https://www.youtube.com/cesium) - Official tutorials, demos, and conference talks.

### Books

*   *[3D Geospatial Visualization with CesiumJS]* - (Add book links as available)

## Framework Integration

### Angular

*   [cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example) ![GitHub stars](https://img.shields.io/github/stars/Developer-Plexscape/cesium-angular-example?style=flat&logo=github) - Integration example with the latest version of Angular.
*   [angular-cesium](https://github.com/Anka-Geo/angular-cesium) ![GitHub stars](https://img.shields.io/github/stars/Anka-Geo/angular-cesium?style=flat&logo=github) ⚠️ **[Outdated - 2019]** - Complete Angular integration guide with detailed setup instructions.

### Vue

*   [vue-cesium](https://github.com/zouyaoji/vue-cesium) ![GitHub stars](https://img.shields.io/github/stars/zouyaoji/vue-cesium?style=flat&logo=github) - Vue 3.x components for CesiumJS with comprehensive third-party library support.
*   [cesium-vue](https://github.com/weshmily/cesium-vue) ⚠️ **[Outdated - 2018]** - Cesium development template based on Vue CLI 4.x.x+.

### React

*   [resium](https://github.com/reearth/resium) ![GitHub stars](https://img.shields.io/github/stars/reearth/resium?style=flat&logo=github) - React components for Cesium with TypeScript support and declarative API.

## Game Engine Integration

*   [3D Tiles for Godot](https://godotengine.org/asset-library/asset/2807) - Official plugin bringing 3D Tiles support to Godot Engine (2025 release by Battle Road).
*   [cesium-unreal](https://github.com/CesiumGS/cesium-unreal) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unreal?style=flat&logo=github) - Bringing the 3D geospatial ecosystem to Unreal Engine.
*   [cesium-unity](https://github.com/CesiumGS/cesium-unity) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unity?style=flat&logo=github) - High-accuracy 3D geospatial content for Unity.

## Data Processing

### Terrain Building

*   [cesium-terrain-builder](https://github.com/geo-data/cesium-terrain-builder) ![GitHub stars](https://img.shields.io/github/stars/geo-data/cesium-terrain-builder?style=flat&logo=github) ⚠️ **[Outdated - 2021]** - C++ library and command line tools for creating terrain tiles.
*   [ctb-quantized-mesh](https://github.com/ahuarte47/cesium-terrain-builder) - Enhanced version supporting quantized-mesh format for better performance.
*   [Cesium Terrain Server](https://github.com/geo-data/cesium-terrain-server) ![GitHub stars](https://img.shields.io/github/stars/geo-data/cesium-terrain-server?style=flat&logo=github) ⚠️ **[Outdated - 2021]** - Server for serving filesystem-based terrain tilesets.

### 3D Model Converting

*   [3dtiles](https://github.com/fanvanzh/3dtiles) ![GitHub stars](https://img.shields.io/github/stars/fanvanzh/3dtiles?style=flat&logo=github) - Fast tools for converting OSGB, Shapefile, and FBX to 3D Tiles.
*   [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF) ![GitHub stars](https://img.shields.io/github/stars/KhronosGroup/COLLADA2GLTF?style=flat&logo=github) ⚠️ **[Outdated - 2020]** - Official Khronos tool for converting COLLADA (.dae) files to glTF.
*   [glTF-Transform](https://github.com/donmccurdy/glTF-Transform) ![GitHub stars](https://img.shields.io/github/stars/donmccurdy/glTF-Transform?style=flat&logo=github) - glTF 2.0 SDK for JavaScript and TypeScript with optimization, compression, and conversion tools.
*   [obj2gltf](https://github.com/CesiumGS/obj2gltf) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/obj2gltf?style=flat&logo=github) - Official Node.js tool for converting OBJ assets to glTF 2.0.
*   [citygml-to-3dtiles](https://github.com/njam/citygml-to-3dtiles) - Experimental converter from CityGML to Cesium 3D Tiles.
*   [cesium-point-cloud-generator](https://github.com/tum-gis/cesium-point-cloud-generator) ⚠️ **[Outdated - 2021]** - Java-based tool for point cloud visualization with 3D Tiles.

## Libraries & Plugins

### UI

*   [cesium-plugins](https://github.com/syzdev/cesium-plugins) ![GitHub stars](https://img.shields.io/github/stars/syzdev/cesium-plugins?style=flat&logo=github) ⚠️ **[Outdated - 2021]** - Collection of practical plugins for coordinate picking, tooltips, overlays, flooding analysis, dynamic water surfaces, and environmental simulation.
*   [Cesium-Plugin](https://github.com/bingqixuan/Cesium-Plugin) ⚠️ **[Outdated - 2021]** - Feature-rich plugin with measurement tools, context menus, and visual effects.

### Graphics


### Data Management

*(See [Cesium documentation](https://cesium.com/learn/) for build and bundling guidance.)*

### Data Visualization

*   [d3cesium](https://github.com/abwood/d3cesium) ⚠️ **[Outdated - 2015]** - Integration demo combining Cesium with D3.js for advanced data visualization.
*   [CesiumMeshVisualizer](https://github.com/MikesWei/CesiumMeshVisualizer) ![GitHub stars](https://img.shields.io/github/stars/MikesWei/CesiumMeshVisualizer?style=flat&logo=github) ⚠️ **[Outdated - 2021]** - Use Three.js geometry in Cesium with advanced mesh management.
*   [ol-cesium](https://github.com/openlayers/ol-cesium) ![GitHub stars](https://img.shields.io/github/stars/openlayers/ol-cesium?style=flat&logo=github) - OpenLayers - Cesium integration for 2D/3D map switching.
*   [cesium-webxr](https://github.com/pupitetris/cesium-webxr) ![GitHub stars](https://img.shields.io/github/stars/pupitetris/cesium-webxr?style=flat&logo=github) - POC: Modern WebXR support for immersive VR/AR experiences.
*   [cesium-vr](https://github.com/NICTA/cesium-vr) ⚠️ **[Outdated - 2015]** - VR plugin for Oculus headsets (requires deprecated WebVR and Cesium 1.10).

### Data Providers

*   [CesiumVectorTile](https://github.com/MikesWei/CesiumVectorTile) ⚠️ **[Outdated - 2021]** - Vector tile imagery provider for rendering vector data on terrain.
*   [Cesium-GeoserverTerrainProvider](https://github.com/kaktus40/Cesium-GeoserverTerrainProvider) - GeoServer integration for various elevation data formats.

### Data Processing & Conversion


### Plotting & Drawing

*   [cesium-drawhelper](https://github.com/leforthomas/cesium-drawhelper) ![GitHub stars](https://img.shields.io/github/stars/leforthomas/cesium-drawhelper?style=flat&logo=github) ⚠️ **[Outdated - 2016]** - Shape editor for creating and editing 2D geometries.
*   [CesiumExp-measure](https://github.com/gitgitczl/CesiumExp-measure) ⚠️ **[Outdated - 2021]** - Measurement plugin for distance, area, and azimuth calculations.

### Editor Tools

For shape and geometry editing, see [cesium-drawhelper](https://github.com/leforthomas/cesium-drawhelper) in [Plotting & Drawing](#plotting--drawing).

### Material & Shader Effects

*   [CesiumRoadImageFlowMaterial](https://github.com/WaterSeeding/CesiumRoadImageFlowMaterial) ![GitHub stars](https://img.shields.io/github/stars/WaterSeeding/CesiumRoadImageFlowMaterial?style=flat&logo=github) ⚠️ **[Outdated - 2022]** - Custom road image flow material with animated effects.

### GPS & Tracking

*   [cesium-gpx-viewer](https://github.com/Duckiduc/cesium-gpx-viewer) ![GitHub stars](https://img.shields.io/github/stars/Duckiduc/cesium-gpx-viewer?style=flat&logo=github) - GPX file viewer built with React.js for GPS track visualization.
*   [Nick_Learns_CesiumJS](https://github.com/Ice-and-Rock/Nick_Learns_CesiumJS) ⚠️ **[Outdated - 2022]** - Flight tracker example project demonstrating real-time tracking capabilities.

### Input & Interaction

*   [Gesture-Controlled-3D-World](https://github.com/ps428/Gesture-Controlled-3D-World) ![GitHub stars](https://img.shields.io/github/stars/ps428/Gesture-Controlled-3D-World?style=flat&logo=github) ⚠️ **[Outdated - 2021]** - Navigate Cesium globe using hand gestures via MediaPipe computer vision.

## Performance & Optimization

For build and bundle optimization, see [Cesium documentation](https://cesium.com/learn/).

## Analysis & Simulation

For flooding analysis, dynamic water surfaces, and environmental simulation, see [cesium-plugins](https://github.com/syzdev/cesium-plugins) in [Libraries & Plugins](#libraries--plugins).

## SDK & Development Frameworks

*   [dc-sdk](https://github.com/dvt3d/dc-sdk) ![GitHub stars](https://img.shields.io/github/stars/dvt3d/dc-sdk?style=flat&logo=github) - WebGIS application framework optimized for rapid development and deployment.
*   [mars3d](http://mars3d.cn/) - Mars3D platform for B/S architecture 3D client development with industry extensions.

## Open Source Projects

*   [Cesium.HPUZYZ.Demo](https://github.com/YanzheZhang/Cesium.HPUZYZ.Demo) ![GitHub stars](https://img.shields.io/github/stars/YanzheZhang/Cesium.HPUZYZ.Demo?style=flat&logo=github) ⚠️ **[Outdated - 2021]** - Comprehensive collection of Cesium demos and examples.
*   [ExamplesforCesium](https://github.com/pasu/ExamplesforCesium) ![GitHub stars](https://img.shields.io/github/stars/pasu/ExamplesforCesium?style=flat&logo=github) ⚠️ **[Outdated - 2022]** - Personal examples and tutorials for Cesium development.

## Applications

*   [satellite-js](https://github.com/shashwatak/satellite-js) ![GitHub stars](https://img.shields.io/github/stars/shashwatak/satellite-js?style=flat&logo=github) - Satellite orbit calculation library from TLE data, commonly used with Cesium for orbit visualization.
*   [satvis](https://github.com/Flowm/satvis) ![GitHub stars](https://img.shields.io/github/stars/Flowm/satvis?style=flat&logo=github) - Advanced satellite orbit visualization and pass prediction.
*   [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field) ![GitHub stars](https://img.shields.io/github/stars/RaymanNg/3D-Wind-Field?style=flat&logo=github) - 3D wind field visualization on Cesium globe.

## Showcases

*   [Cesium Sandcastle](https://sandcastle.cesium.com/) - Official interactive showcase of Cesium features and capabilities.
*   [Cesium ion](https://ion.cesium.com/) - Cloud platform showcasing real-world 3D content streaming.

## Data Sources

*   [Cesium Ion](https://ion.cesium.com/) - Cloud platform for streaming and hosting 3D geospatial content.
*   [OpenStreetMap](https://www.openstreetmap.org/) - Collaborative mapping platform providing global map data.
*   [Natural Earth](https://www.naturalearthdata.com/) - Public domain map dataset for cartographers.

## Tools

*(For CesiumJS build setup and bundling, see [official documentation](https://cesium.com/learn/).)*

## Ecosystem

*   [cesium-omniverse](https://github.com/CesiumGS/cesium-omniverse) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-omniverse?style=flat&logo=github) - Cesium connector for NVIDIA Omniverse platform.
*   See [Game Engine Integration](#game-engine-integration) for Unity, Unreal, and Godot plugins.

## Contributing

Your contributions are always welcome! Please take a look at the [contribution guidelines](CONTRIBUTING.md) first.

**How to contribute:**
- 🌟 Star this repository if you find it useful
- 🐛 Report issues or broken links
- 💡 Suggest new resources or categories
- 🔧 Submit pull requests with improvements

**Guidelines for adding new resources:**
- Ensure the resource is directly related to Cesium
- Check that the project is well-documented and maintained
- Include a brief, clear description of what the resource does
- Add appropriate badges (stars, activity status) where available

If you see a package or project here that is no longer maintained or is not a good fit, please submit a pull request to improve this file. Thank you!

---

## Statistics

> Last updated: January 2025  
> Total resources: 60+  
> Categories: 15  
> Contributors: Welcome!

**Legend:**
- 🌟 Highly recommended
- 🆕 Recently added/updated
- 📱 Mobile-friendly
- ⚡ Performance-focused
- 📚 Great for learning 