# Awesome Cesium [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Open-source JavaScript library for world-class 3D globes and maps with high-performance geospatial streaming, precision, and visual quality.

This list curates libraries, tools, framework integrations, game engines, and resources for the CesiumJS ecosystem.

## Contents

- [Quick Start](#quick-start)
- [Official Resources](#official-resources)
- [Community](#community)
- [Learning Resources](#learning-resources)
- [Framework Integration](#framework-integration)
- [Game Engine Integration](#game-engine-integration)
- [Data Processing](#data-processing)
- [Libraries & Plugins](#libraries--plugins)
- [Performance & Optimization](#performance--optimization)
- [AI Integration](#ai-integration)
- [SDK & Development Frameworks](#sdk--development-frameworks)
- [Open Source Projects](#open-source-projects)
- [Applications](#applications)
- [Showcases](#showcases)
- [Data Sources & Platform](#data-sources--platform)
- [Tools](#tools)
- [Ecosystem](#ecosystem)
- [Future & Emerging](#future--emerging)
- [Archived / Legacy](#archived--legacy)

---

## Quick Start

New to Cesium? Start here:

**Official Documentation** — Tutorials and API reference: <https://cesium.com/learn/>

**Sandcastle** — Interactive code examples (now with [AI semantic search](https://cesium.com/blog/2026/03/19/ai-driven-semantic-search-sandcastle/)): <https://sandcastle.cesium.com/>

**Framework**: Vue → [vue-cesium](https://github.com/zouyaoji/vue-cesium) 🌟 | React → [resium](https://github.com/reearth/resium) 🌟

**Examples**: [Cesium-Examples](https://github.com/jiawanlong/Cesium-Examples) — 200+ demos 🌟.

- Recommended stack for new projects: Vue 3 + Vite → [cesium-vue3-vite](https://github.com/tingyuxuan2302/cesium-vue3-vite) or vue-cesium | React → resium.

## Official Resources

- [Official Website](https://cesium.com/) - The official Cesium website with documentation and resources.
- [CesiumJS Library](https://cesium.com/cesiumjs/) - The main JavaScript library for 3D globes and maps.
- Documentation - Comprehensive documentation, tutorials, and API reference.
- Official Examples - Interactive code examples and demos.
- [GitHub Repository](https://github.com/CesiumGS/cesium) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium?style=flat&logo=github) The official open-source CesiumJS repository.
- [Cesium Native](https://github.com/CesiumGS/cesium-native) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-native?style=flat&logo=github) Foundational C++ library for 3D Tiles, terrain, and geospatial processing. Powers Cesium for Unreal, Unity, and Omniverse.
- [3D Tiles Specification](https://github.com/CesiumGS/3d-tiles) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles?style=flat&logo=github) Open specification for streaming 3D geospatial content.

## Community

- [Community Forum](https://community.cesium.com/) - Official community forum for questions, discussions, and announcements.
- [Discord](https://discord.gg/cesium) - Real-time chat and community discussions.
- [Reddit](https://www.reddit.com/r/cesium/) - Community discussions and news.

## Learning Resources

### Tutorials

- Official CesiumJS Tutorials - Step-by-step tutorials and learning resources for beginners.

### Blogs

- [Official Cesium Blog](https://cesium.com/blog/) - Latest news, features, technical insights, and real-world use cases.

### Videos

- [Cesium YouTube Channel](https://www.youtube.com/cesium) - Official tutorials, demos, and conference talks.

### Books

- 3D Geospatial Visualization with CesiumJS - (Add book links as available).

## Framework Integration

### Angular

- [cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example) - ![GitHub stars](https://img.shields.io/github/stars/Developer-Plexscape/cesium-angular-example?style=flat&logo=github) Integration example with the latest version of Angular.

### Vue

- vue-cesium - ![GitHub stars](https://img.shields.io/github/stars/zouyaoji/vue-cesium?style=flat&logo=github) Vue 3.x components for CesiumJS with comprehensive third-party library support.
- cesium-vue3-vite - ![GitHub stars](https://img.shields.io/github/stars/tingyuxuan2302/cesium-vue3-vite?style=flat&logo=github) Vue 3 + Vite + Cesium template with common 3D visualization scenes.

### React

- resium - ![GitHub stars](https://img.shields.io/github/stars/reearth/resium?style=flat&logo=github) React components for Cesium with TypeScript support and declarative API.

## Game Engine Integration

- [3D Tiles for Godot](https://godotengine.org/asset-library/asset/2807) - Official plugin bringing 3D Tiles support to Godot Engine (2025 release by Battle Road).
- [cesium-unreal](https://github.com/CesiumGS/cesium-unreal) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unreal?style=flat&logo=github) Bringing the 3D geospatial ecosystem to Unreal Engine.
- [cesium-unity](https://github.com/CesiumGS/cesium-unity) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-unity?style=flat&logo=github) High-accuracy 3D geospatial content for Unity. Web deployment supported since v1.20.0.

## Data Processing

### Terrain Building

- [ctb-quantized-mesh](https://github.com/ahuarte47/cesium-terrain-builder) - Enhanced version of cesium-terrain-builder supporting quantized-mesh format for better performance.

### 3D Model Converting

- [3dtiles](https://github.com/fanvanzh/3dtiles) - ![GitHub stars](https://img.shields.io/github/stars/fanvanzh/3dtiles?style=flat&logo=github) Fast tools for converting OSGB, Shapefile, and FBX to 3D Tiles.
- [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/gltf-pipeline?style=flat&logo=github) Official content pipeline for optimizing glTF assets for 3D Tiles and Cesium.
- [glTF-Transform](https://github.com/donmccurdy/glTF-Transform) - ![GitHub stars](https://img.shields.io/github/stars/donmccurdy/glTF-Transform?style=flat&logo=github) glTF 2.0 SDK for JavaScript and TypeScript with optimization, compression, and conversion tools.
- [obj2gltf](https://github.com/CesiumGS/obj2gltf) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/obj2gltf?style=flat&logo=github) Official Node.js tool for converting OBJ assets to glTF 2.0.
- [citygml-to-3dtiles](https://github.com/njam/citygml-to-3dtiles) - Experimental converter from CityGML to Cesium 3D Tiles.
- [glTF-Blender-IO](https://github.com/KhronosGroup/glTF-Blender-IO) - ![GitHub stars](https://img.shields.io/github/stars/KhronosGroup/glTF-Blender-IO?style=flat&logo=github) Official Blender add-on for glTF 2.0 import/export. Essential for creating and editing models destined for 3D Tiles.
- [spz](https://github.com/CesiumGS/spz) - Open-source SPZ file format for 3D Gaussian Splats. ~10x smaller than PLY with virtually no perceptible loss. Offered by Niantic Labs.

## Libraries & Plugins

### UI

*(Contributions welcome for actively maintained UI plugins.)*

### Data Management

See Cesium documentation for build and bundling guidance.

### Data Visualization

- [ol-cesium](https://github.com/openlayers/ol-cesium) - ![GitHub stars](https://img.shields.io/github/stars/openlayers/ol-cesium?style=flat&logo=github) OpenLayers - Cesium integration for 2D/3D map switching.
- [3DTilesRendererJS](https://github.com/NASA-AMMOS/3DTilesRendererJS) - ![GitHub stars](https://img.shields.io/github/stars/NASA-AMMOS/3DTilesRendererJS?style=flat&logo=github) 3D Tiles renderer for Three.js, alternative to Cesium for 3D Tiles visualization.
- [cesium-webxr](https://github.com/pupitetris/cesium-webxr) - ![GitHub stars](https://img.shields.io/github/stars/pupitetris/cesium-webxr?style=flat&logo=github) POC: Modern WebXR support for immersive VR/AR experiences.

### Data Providers

- [Cesium-GeoserverTerrainProvider](https://github.com/kaktus40/Cesium-GeoserverTerrainProvider) - GeoServer integration for various elevation data formats.

### Material & Shader Effects

*(Contributions welcome for actively maintained material plugins.)*

### GPS & Tracking

- [cesium-gpx-viewer](https://github.com/Duckiduc/cesium-gpx-viewer) - ![GitHub stars](https://img.shields.io/github/stars/Duckiduc/cesium-gpx-viewer?style=flat&logo=github) GPX file viewer built with React.js for GPS track visualization.

### Input & Interaction

*(Contributions welcome for actively maintained interaction plugins.)*

## Performance & Optimization

For build and bundle optimization, see Cesium documentation.

## AI Integration

The Cesium ecosystem is rapidly integrating with AI systems. This section covers MCP servers, agent skills, and AI-assisted geospatial workflows.

### MCP Servers

- [cesium-ai-integrations](https://github.com/CesiumGS/cesium-ai-integrations) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-ai-integrations?style=flat&logo=github) Official Cesium collection of MCP servers, apps, and agent skills for connecting AI systems with CesiumJS.
- [cesium-mcp](https://github.com/gaopengbin/cesium-mcp) - ![GitHub stars](https://img.shields.io/github/stars/gaopengbin/cesium-mcp?style=flat&logo=github) Community MCP bridge providing 58 tools for camera control, entity management, 3D Tiles, terrain, imagery layers, and spatial analysis. Supports stdio and WebSocket modes.

### Agent Skills & Tools

- [cesium-vscode](https://github.com/CesiumGS/cesium-vscode) - Official Visual Studio Code extension for CesiumJS development.
- [Context7 Cesium Server](https://context7.com/) - MCP server providing AI tools with real-time access to latest CesiumJS documentation and API references to reduce hallucinations.

## SDK & Development Frameworks

- [dc-sdk](https://github.com/dvt3d/dc-sdk) - ![GitHub stars](https://img.shields.io/github/stars/dvt3d/dc-sdk?style=flat&logo=github) WebGIS application framework optimized for rapid development and deployment.
- [mars3d](https://github.com/marsgis/mars3d) - ![GitHub stars](https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github) Mars3D platform for B/S architecture 3D client development with industry extensions.

## Open Source Projects

- Cesium-Examples - ![GitHub stars](https://img.shields.io/github/stars/jiawanlong/Cesium-Examples?style=flat&logo=github) Comprehensive collection of 200+ CesiumJS examples including analysis, visualization, and data loading.

## Applications

- [satellite-js](https://github.com/shashwatak/satellite-js) - ![GitHub stars](https://img.shields.io/github/stars/shashwatak/satellite-js?style=flat&logo=github) Satellite orbit calculation library from TLE data, commonly used with Cesium for orbit visualization.
- [satvis](https://github.com/Flowm/satvis) - ![GitHub stars](https://img.shields.io/github/stars/Flowm/satvis?style=flat&logo=github) Advanced satellite orbit visualization and pass prediction.
- [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field) - ![GitHub stars](https://img.shields.io/github/stars/RaymanNg/3D-Wind-Field?style=flat&logo=github) 3D wind field visualization on Cesium globe.
- [TerriaJS](https://github.com/TerriaJS/terriajs) - ![GitHub stars](https://img.shields.io/github/stars/TerriaJS/terriajs?style=flat&logo=github) Library for building rich geospatial 2D & 3D data platforms with Cesium support.
- [MapStore2](https://github.com/geosolutions-it/MapStore2) - ![GitHub stars](https://img.shields.io/github/stars/geosolutions-it/MapStore2?style=flat&logo=github) Open-source framework for creating and sharing maps, dashboards, and geostories with 3D Cesium support.
- [SuperMap iClient-JavaScript](https://github.com/SuperMap/iClient-JavaScript) - ![GitHub stars](https://img.shields.io/github/stars/SuperMap/iClient-JavaScript?style=flat&logo=github) Modern GIS web client supporting Leaflet, OpenLayers, MapboxGL, and CesiumJS. Enhanced with ECharts, D3, and MapV.

## Showcases

- Cesium Sandcastle - Official interactive showcase of Cesium features and capabilities.
- [Cesium ion](https://ion.cesium.com/) - Cloud platform for streaming 3D content, photogrammetry pipelines, terrain, and real-world datasets.

## Data Sources & Platform

- Cesium Ion - Cloud platform for streaming, hosting, and processing 3D geospatial content; includes terrain, imagery, 3D Tiles, and photogrammetry.
- [OpenStreetMap](https://www.openstreetmap.org/) - Collaborative mapping platform providing global map data.
- [Natural Earth](https://www.naturalearthdata.com/) - Public domain map dataset for cartographers.
- [PMTiles](https://github.com/protomaps/PMTiles) - ![GitHub stars](https://img.shields.io/github/stars/protomaps/PMTiles?style=flat&logo=github) Map tiles in a single file on static storage. Enables offline-capable, self-hosted tile serving compatible with Cesium.

## Tools

- [3d-tiles-validator](https://github.com/CesiumGS/3d-tiles-validator) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles-validator?style=flat&logo=github) Official validator for 3D Tiles tilesets.
- [3d-tiles-samples](https://github.com/CesiumGS/3d-tiles-samples) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles-samples?style=flat&logo=github) Sample tilesets for learning and testing 3D Tiles.
- [spz-loader](https://github.com/CesiumGS/spz-loader) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/spz-loader?style=flat&logo=github) Official .spz 3D Gaussian Splatting format loader for CesiumJS.
- cesium-vscode - Official VS Code extension for CesiumJS development.
- [cesiumjs-workshop](https://github.com/CesiumGS/cesiumjs-workshop) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesiumjs-workshop?style=flat&logo=github) Deep dive workshop materials from the 2025 Cesium Developer Conference.
- For CesiumJS build setup and bundling, see official documentation.

## Ecosystem

- [cesium-omniverse](https://github.com/CesiumGS/cesium-omniverse) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-omniverse?style=flat&logo=github) Cesium connector for NVIDIA Omniverse.
- See Game Engine Integration and Future & Emerging sections above.

## Future & Emerging

Technologies and directions shaping the Cesium ecosystem.

**AI & MCP** — cesium-ai-integrations for MCP servers and agent skills; community cesium-mcp for natural language 3D globe control.

**3D Gaussian Splatting** — Maturing experimental support in CesiumJS via SPZ format and spz-loader; enables photorealistic 3D scene rendering from captured data. v1.140 brings significant loading and rendering performance improvements, plus fixes for large-scale dataset crashes.

**3D Tiles Next** — Evolution of the streaming specification; experimental support in Cesium. Follow Cesium Blog for announcements.

**Cesium ion** — Cloud platform for 3D geospatial; streaming, tiling, photogrammetry, and hosting. The default for production deployments.

**Game Engines** — Unity (web deployable), Unreal, Godot bring Cesium and 3D Tiles to real-time engines.

**Omniverse & WebXR** — cesium-omniverse for NVIDIA Omniverse; cesium-webxr for VR/AR in the browser.

## Archived / Legacy

> Resources below are no longer actively maintained (24+ months inactive). Kept for reference; use with caution.

### Terrain & Data Processing

- [cesium-terrain-builder](https://github.com/geo-data/cesium-terrain-builder) (2021) - C++ library for terrain tiles.
- [Cesium Terrain Server](https://github.com/geo-data/cesium-terrain-server) (2021) - Filesystem-based terrain serving.
- [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF) (2020) - COLLADA to glTF conversion.
- [cesium-point-cloud-generator](https://github.com/tum-gis/cesium-point-cloud-generator) (2021) - Java point cloud tool.

### Plugins & UI

- [cesium-plugins](https://github.com/syzdev/cesium-plugins) (2021) - Coordinate picking, flooding analysis, overlays.
- [Cesium-Plugin](https://github.com/bingqixuan/Cesium-Plugin) (2021) - Measurement, context menus.
- [CesiumVectorTile](https://github.com/MikesWei/CesiumVectorTile) (2021) - Vector tile provider.
- [cesium-drawhelper](https://github.com/leforthomas/cesium-drawhelper) (2016) - Shape editor.
- [CesiumExp-measure](https://github.com/gitgitczl/CesiumExp-measure) (2021) - Measurement plugin.
- [CesiumMeshVisualizer](https://github.com/MikesWei/CesiumMeshVisualizer) (2021) - Three.js geometry in Cesium.
- [CesiumRoadImageFlowMaterial](https://github.com/WaterSeeding/CesiumRoadImageFlowMaterial) (2022) - Road flow material.

### Examples & Demos

- [Cesium.HPUZYZ.Demo](https://github.com/YanzheZhang/Cesium.HPUZYZ.Demo) - (2021).
- [ExamplesforCesium](https://github.com/pasu/ExamplesforCesium) - (2022).
- [Nick_Learns_CesiumJS](https://github.com/Ice-and-Rock/Nick_Learns_CesiumJS) - (2022).
- [Gesture-Controlled-3D-World](https://github.com/ps428/Gesture-Controlled-3D-World) - (2021).

### Deprecated (Removed)

- Removed from this list: *angular-cesium* (2019), *cesium-vue* (2018), *d3cesium* (2015), *cesium-vr* (2015). See Git history.

## Contributing

Your contributions are always welcome! Please take a look at the [contribution guidelines](CONTRIBUTING.md) first.

**How to contribute:**

- Star this repository if you find it useful.
- Report issues or broken links.
- Suggest new resources or categories.
- Submit pull requests with improvements.

**Guidelines for adding new resources:**
- Ensure the resource is directly related to Cesium.
- Check that the project is well-documented and maintained.
- Include a brief, clear description of what the resource does.
- Add appropriate badges (stars, activity status) where available.

If you see a package or project here that is no longer maintained or is not a good fit, please submit a pull request to improve this file. Thank you!

---

> Last updated: April 2026
> Active resources: 45+
> Archived (legacy): 14
> Categories: 14

**Legend:** **Recommended** means actively maintained, widely used, and future-oriented (some entries use a star marker). Entries marked for learning are good starting points. Deprecated resources are listed under Archived / Legacy.

Curated for CesiumJS 1.x (currently 1.140). Only actively maintained resources in the main list. See [Inclusion Criteria](docs/INCLUSION_CRITERIA.md).

---

**Language:** [English](README.md) | [简体中文](readme-zh.md)
