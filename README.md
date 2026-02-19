# Awesome Cesium

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/reed-soul/awesome-cesium.svg?style=social&label=Star)](https://github.com/reed-soul/awesome-cesium)
[![GitHub forks](https://img.shields.io/github/forks/reed-soul/awesome-cesium.svg?style=social&label=Fork)](https://github.com/reed-soul/awesome-cesium)
[![GitHub watchers](https://img.shields.io/github/watchers/reed-soul/awesome-cesium.svg?style=social&label=Watch)](https://github.com/reed-soul/awesome-cesium)

> A curated list of awesome [Cesium](https://cesium.com/) libraries, resources and other shiny things.

[CesiumJS](https://cesium.com/cesiumjs/) is an open-source JavaScript library for creating world-class 3D globes and maps with the best possible performance, precision, visual quality, and ease of use.

**🌐 Language/语言:** [English](README.md) | [简体中文](README.zh.md)

## 🚀 Quick Start

New to Cesium? Start here:

1. **[Official Documentation](https://cesium.com/learn/)** — Tutorials and API reference
2. **[Sandcastle](https://sandcastle.cesium.com/)** — Interactive code examples
3. **Framework**: Vue → [vue-cesium](https://github.com/zouyaoji/vue-cesium) 🌟 | React → [resium](https://github.com/reearth/resium) 🌟
4. **Examples**: [Cesium-Examples](https://github.com/jiawanlong/Cesium-Examples) — 200+ demos 🌟

*Recommended stack for new projects: Vue 3 + Vite → [cesium-vue3-vite](https://github.com/tingyuxuan2302/cesium-vue3-vite) or [vue-cesium](https://github.com/zouyaoji/vue-cesium) | React → [resium](https://github.com/reearth/resium)*

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
  - [Data Management](#data-management)
  - [Data Visualization](#data-visualization)
  - [Data Providers](#data-providers)
  - [Material & Shader Effects](#material--shader-effects)
  - [GPS & Tracking](#gps--tracking)
  - [Input & Interaction](#input--interaction)
- [Performance & Optimization](#performance--optimization)
- [SDK & Development Frameworks](#sdk--development-frameworks)
- [Open Source Projects](#open-source-projects)
- [Applications](#applications)
- [Showcases](#showcases)
- [Data Sources & Platform](#data-sources--platform)
- [Tools](#tools)
- [Ecosystem](#ecosystem)
- [Future & Emerging](#future--emerging)
- [Archived / Legacy](#archived--legacy)
- [Contributing](#contributing)

---

## Official Resources

*   [Official Website](https://cesium.com/) - The official Cesium website with documentation and resources.
*   [CesiumJS Library](https://cesium.com/cesiumjs/) - The main JavaScript library for 3D globes and maps.
*   [Documentation](https://cesium.com/learn/) - Comprehensive documentation, tutorials, and API reference.
*   [Official Examples](https://sandcastle.cesium.com/) - Interactive code examples and demos.
*   [GitHub Repository](https://github.com/CesiumGS/cesium) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium?style=flat&logo=github) - The official open-source CesiumJS repository.
*   [3D Tiles Specification](https://github.com/CesiumGS/3d-tiles) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles?style=flat&logo=github) - Open specification for streaming 3D geospatial content.

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

### Vue

*   [vue-cesium](https://github.com/zouyaoji/vue-cesium) ![GitHub stars](https://img.shields.io/github/stars/zouyaoji/vue-cesium?style=flat&logo=github) 🌟 - Vue 3.x components for CesiumJS with comprehensive third-party library support.
*   [cesium-vue3-vite](https://github.com/tingyuxuan2302/cesium-vue3-vite) ![GitHub stars](https://img.shields.io/github/stars/tingyuxuan2302/cesium-vue3-vite?style=flat&logo=github) - Vue 3 + Vite + Cesium template with common 3D visualization scenes.

### React

*   [resium](https://github.com/reearth/resium) ![GitHub stars](https://img.shields.io/github/stars/reearth/resium?style=flat&logo=github) 🌟 - React components for Cesium with TypeScript support and declarative API.

## Game Engine Integration

*   [3D Tiles for Godot](https://godotengine.org/asset-library/asset/2807) - Official plugin bringing 3D Tiles support to Godot Engine (2025 release by Battle Road).
*   [cesium-unreal](https://github.com/CesiumGS/cesium-unreal) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unreal?style=flat&logo=github) 🌟 - Bringing the 3D geospatial ecosystem to Unreal Engine.
*   [cesium-unity](https://github.com/CesiumGS/cesium-unity) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unity?style=flat&logo=github) 🌟 - High-accuracy 3D geospatial content for Unity.

## Data Processing

### Terrain Building

*   [ctb-quantized-mesh](https://github.com/ahuarte47/cesium-terrain-builder) - Enhanced version of cesium-terrain-builder supporting quantized-mesh format for better performance.

### 3D Model Converting

*   [3dtiles](https://github.com/fanvanzh/3dtiles) ![GitHub stars](https://img.shields.io/github/stars/fanvanzh/3dtiles?style=flat&logo=github) 🌟 - Fast tools for converting OSGB, Shapefile, and FBX to 3D Tiles.
*   [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/gltf-pipeline?style=flat&logo=github) 🌟 - Official content pipeline for optimizing glTF assets for 3D Tiles and Cesium.
*   [glTF-Transform](https://github.com/donmccurdy/glTF-Transform) ![GitHub stars](https://img.shields.io/github/stars/donmccurdy/glTF-Transform?style=flat&logo=github) 🌟 - glTF 2.0 SDK for JavaScript and TypeScript with optimization, compression, and conversion tools.
*   [obj2gltf](https://github.com/CesiumGS/obj2gltf) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/obj2gltf?style=flat&logo=github) - Official Node.js tool for converting OBJ assets to glTF 2.0.
*   [citygml-to-3dtiles](https://github.com/njam/citygml-to-3dtiles) - Experimental converter from CityGML to Cesium 3D Tiles.

## Libraries & Plugins

### UI

*(Contributions welcome for actively maintained UI plugins.)*

### Data Management

See [Cesium documentation](https://cesium.com/learn/) for build and bundling guidance.

### Data Visualization

*   [ol-cesium](https://github.com/openlayers/ol-cesium) ![GitHub stars](https://img.shields.io/github/stars/openlayers/ol-cesium?style=flat&logo=github) 🌟 - OpenLayers - Cesium integration for 2D/3D map switching.
*   [3DTilesRendererJS](https://github.com/NASA-AMMOS/3DTilesRendererJS) ![GitHub stars](https://img.shields.io/github/stars/NASA-AMMOS/3DTilesRendererJS?style=flat&logo=github) - 3D Tiles renderer for Three.js, alternative to Cesium for 3D Tiles visualization.
*   [cesium-webxr](https://github.com/pupitetris/cesium-webxr) ![GitHub stars](https://img.shields.io/github/stars/pupitetris/cesium-webxr?style=flat&logo=github) - POC: Modern WebXR support for immersive VR/AR experiences.

### Data Providers

*   [Cesium-GeoserverTerrainProvider](https://github.com/kaktus40/Cesium-GeoserverTerrainProvider) - GeoServer integration for various elevation data formats.

### Material & Shader Effects

*(Contributions welcome for actively maintained material plugins.)*

### GPS & Tracking

*   [cesium-gpx-viewer](https://github.com/Duckiduc/cesium-gpx-viewer) ![GitHub stars](https://img.shields.io/github/stars/Duckiduc/cesium-gpx-viewer?style=flat&logo=github) - GPX file viewer built with React.js for GPS track visualization.

### Input & Interaction

*(Contributions welcome for actively maintained interaction plugins.)*

## Performance & Optimization

For build and bundle optimization, see [Cesium documentation](https://cesium.com/learn/).

## SDK & Development Frameworks

*   [dc-sdk](https://github.com/dvt3d/dc-sdk) ![GitHub stars](https://img.shields.io/github/stars/dvt3d/dc-sdk?style=flat&logo=github) 🌟 - WebGIS application framework optimized for rapid development and deployment.
*   [mars3d](https://github.com/marsgis/mars3d) ![GitHub stars](https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github) 🌟 - Mars3D platform for B/S architecture 3D client development with industry extensions.

## Open Source Projects

*   [Cesium-Examples](https://github.com/jiawanlong/Cesium-Examples) ![GitHub stars](https://img.shields.io/github/stars/jiawanlong/Cesium-Examples?style=flat&logo=github) 🌟 - Comprehensive collection of 200+ CesiumJS examples including analysis, visualization, and data loading.

## Applications

*   [satellite-js](https://github.com/shashwatak/satellite-js) ![GitHub stars](https://img.shields.io/github/stars/shashwatak/satellite-js?style=flat&logo=github) - Satellite orbit calculation library from TLE data, commonly used with Cesium for orbit visualization.
*   [satvis](https://github.com/Flowm/satvis) ![GitHub stars](https://img.shields.io/github/stars/Flowm/satvis?style=flat&logo=github) - Advanced satellite orbit visualization and pass prediction.
*   [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field) ![GitHub stars](https://img.shields.io/github/stars/RaymanNg/3D-Wind-Field?style=flat&logo=github) - 3D wind field visualization on Cesium globe.
*   [TerriaJS](https://github.com/TerriaJS/terriajs) ![GitHub stars](https://img.shields.io/github/stars/TerriaJS/terriajs?style=flat&logo=github) - Library for building rich geospatial 2D & 3D data platforms with Cesium support.

## Showcases

*   [Cesium Sandcastle](https://sandcastle.cesium.com/) - Official interactive showcase of Cesium features and capabilities.
*   [Cesium ion](https://ion.cesium.com/) 🌟 - Cloud platform for streaming 3D content, photogrammetry pipelines, terrain, and real-world datasets.

## Data Sources & Platform

*   [Cesium Ion](https://ion.cesium.com/) 🌟 - Cloud platform for streaming, hosting, and processing 3D geospatial content; includes terrain, imagery, 3D Tiles, and photogrammetry.
*   [OpenStreetMap](https://www.openstreetmap.org/) - Collaborative mapping platform providing global map data.
*   [Natural Earth](https://www.naturalearthdata.com/) - Public domain map dataset for cartographers.

## Future & Emerging

*Technologies and directions shaping the Cesium ecosystem.*

*   **3D Tiles Next** — Evolution of the streaming specification; experimental support in [Cesium](https://github.com/CesiumGS/cesium). Follow [Cesium Blog](https://cesium.com/blog/) for announcements.
*   **Cesium ion** — Cloud platform for 3D geospatial; streaming, tiling, photogrammetry, and hosting. The default for production deployments.
*   **Game Engines** — [Unity](https://github.com/CesiumGS/cesium-unity), [Unreal](https://github.com/CesiumGS/cesium-unreal), [Godot](https://godotengine.org/asset-library/asset/2807) bring Cesium and 3D Tiles to real-time engines.
*   **Omniverse & WebXR** — [cesium-omniverse](https://github.com/CesiumGS/cesium-omniverse) for NVIDIA Omniverse; [cesium-webxr](https://github.com/pupitetris/cesium-webxr) for VR/AR in the browser.

## Tools

*   [3d-tiles-validator](https://github.com/CesiumGS/3d-tiles-validator) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles-validator?style=flat&logo=github) - Official validator for 3D Tiles tilesets.
*   [3d-tiles-samples](https://github.com/CesiumGS/3d-tiles-samples) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles-samples?style=flat&logo=github) - Sample tilesets for learning and testing 3D Tiles.
*   For CesiumJS build setup and bundling, see [official documentation](https://cesium.com/learn/).

## Ecosystem

*   [cesium-omniverse](https://github.com/CesiumGS/cesium-omniverse) ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-omniverse?style=flat&logo=github) - Cesium connector for NVIDIA Omniverse.
*   See [Game Engine Integration](#game-engine-integration) and [Future & Emerging](#future--emerging).

## Archived / Legacy

*Resources below are no longer actively maintained (24+ months inactive). Kept for reference; use with caution.*

### Terrain & Data Processing
*   [cesium-terrain-builder](https://github.com/geo-data/cesium-terrain-builder) (2021) - C++ library for terrain tiles
*   [Cesium Terrain Server](https://github.com/geo-data/cesium-terrain-server) (2021) - Filesystem-based terrain serving
*   [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF) (2020) - COLLADA to glTF conversion
*   [cesium-point-cloud-generator](https://github.com/tum-gis/cesium-point-cloud-generator) (2021) - Java point cloud tool

### Plugins & UI
*   [cesium-plugins](https://github.com/syzdev/cesium-plugins) (2021) - Coordinate picking, flooding analysis, overlays
*   [Cesium-Plugin](https://github.com/bingqixuan/Cesium-Plugin) (2021) - Measurement, context menus
*   [CesiumVectorTile](https://github.com/MikesWei/CesiumVectorTile) (2021) - Vector tile provider
*   [cesium-drawhelper](https://github.com/leforthomas/cesium-drawhelper) (2016) - Shape editor
*   [CesiumExp-measure](https://github.com/gitgitczl/CesiumExp-measure) (2021) - Measurement plugin
*   [CesiumMeshVisualizer](https://github.com/MikesWei/CesiumMeshVisualizer) (2021) - Three.js geometry in Cesium
*   [CesiumRoadImageFlowMaterial](https://github.com/WaterSeeding/CesiumRoadImageFlowMaterial) (2022) - Road flow material

### Examples & Demos
*   [Cesium.HPUZYZ.Demo](https://github.com/YanzheZhang/Cesium.HPUZYZ.Demo) (2021)
*   [ExamplesforCesium](https://github.com/pasu/ExamplesforCesium) (2022)
*   [Nick_Learns_CesiumJS](https://github.com/Ice-and-Rock/Nick_Learns_CesiumJS) (2022)
*   [Gesture-Controlled-3D-World](https://github.com/ps428/Gesture-Controlled-3D-World) (2021)

### Deprecated (Removed)
*angular-cesium* (2019), *cesium-vue* (2018), *d3cesium* (2015), *cesium-vr* (2015) — no longer listed; see git history.

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

> Last updated: February 2025  
> Active resources: 35+  
> Archived (legacy): 14  
> Categories: 12  

**Legend:**
- 🌟 **Recommended** — Actively maintained, widely used, future-oriented
- 📚 Great for learning
- See [Archived / Legacy](#archived--legacy) for deprecated resources

*Curated for CesiumJS 1.x. Only actively maintained resources in the main list. See [Inclusion Criteria](docs/INCLUSION_CRITERIA.md).* 