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
- [Data Sources & Platform](#data-sources--platform)
- [Tools](#tools)
- [Ecosystem](#ecosystem)
- [Future & Emerging](#future--emerging)
- [Archived / Legacy](#archived--legacy)
- [Related Lists](#related-lists)
- [Contributing](#contributing)

---

## Quick Start

New to Cesium? Start here:

- Official Resources — docs, Sandcastle, and the core library.
- Framework Integration — Vue (`vue-cesium`) or React (`resium`).
- Tools — Vite starter (`cesium-vite-example`) or bundler plugin (`vite-plugin-cesium`).
- Open Source Projects / Applications — demos and production-style apps.

## Official Resources

- [Official Website](https://cesium.com/) - The official Cesium website with documentation and resources.
- [CesiumJS Library](https://cesium.com/cesiumjs/) - The main JavaScript library for 3D globes and maps.
- [Documentation](https://cesium.com/learn/) - Comprehensive documentation, tutorials, and API reference.
- [Sandcastle](https://sandcastle.cesium.com/) - Interactive code examples and demos, with AI semantic search and Sandcastle Copilot (BYOK).
- [GitHub Repository](https://github.com/CesiumGS/cesium) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium?style=flat&logo=github) The official open-source CesiumJS repository.
- [Cesium Native](https://github.com/CesiumGS/cesium-native) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-native?style=flat&logo=github) Foundational C++ library for 3D Tiles, terrain, and geospatial processing. Powers Cesium for Unreal, Unity, and Omniverse.
- [3D Tiles Specification](https://github.com/CesiumGS/3d-tiles) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles?style=flat&logo=github) Open specification for streaming 3D geospatial content.

## Community

- [Community Forum](https://community.cesium.com/) - Official community forum for questions, discussions, and announcements.
- [Discord](https://discord.gg/cesium) - Real-time chat and community discussions.
- [Reddit](https://www.reddit.com/r/cesium/) - Community discussions and news.

## Learning Resources

### Tutorials

- [Official CesiumJS Tutorials](https://cesium.com/learn/cesiumjs-learn/) - Step-by-step tutorials and learning resources for beginners.
- [Build a CesiumJS App with AI](https://cesium.com/learn/cesiumjs-learn/build-a-cesiumjs-app-with-ai/) - 🆕 **New** Official entry tutorial for scaffolding a Vite + React + TypeScript CesiumJS app with an AI coding agent and CesiumJS Agent Skills.
- [Build a Philadelphia Landmark Tour with CesiumJS Using AI](https://cesium.com/learn/cesiumjs-learn/build-a-philadelphia-tour-with-cesiumjs-using-ai/) - 🆕 **New** Official AI-agent walkthrough for a 3D landmark flyover of Philadelphia on Google Photorealistic 3D Tiles.
- [Build a Flight Simulator with CesiumJS Using AI](https://cesium.com/learn/cesiumjs-learn/build-a-flight-simulator-with-cesiumjs-using-ai/) - 🆕 **New** Official guide to building a CesiumJS flight simulator with an AI coding agent, React, and TypeScript.
- [View 3D Gaussian Splat Tilesets with LODs](https://cesium.com/learn/cesiumjs-learn/3d-guassian-splat-tilesets-lods/) - 🆕 **New** Official tutorial for streaming Gaussian splat 3D Tiles with hierarchical LOD and screen-space error tuning.
- [Snap to Design Model Geometry](https://cesium.com/learn/bim-cad/snapping/) - 🆕 **New** Official guide to hybrid client/server snap-to-geometry against Cesium ion BIM/CAD Database models.

### Blogs

- [Official Cesium Blog](https://cesium.com/blog/) - Latest news, features, technical insights, and real-world use cases.
- [Introducing CesiumJS Sandcastle Copilot](https://cesium.com/blog/2026/07/07/introducing-cesiumjs-sandcastle-copilot/) - 🆕 **New** AI chat panel in Sandcastle for writing, editing, and debugging CesiumJS samples (bring-your-own LLM key).
- [Vector Tiles: A Technology Preview for Cesium and 3D Tiles](https://cesium.com/blog/2026/09/02/vector-tiles-technology-preview-cesium-and-3d-tiles/) - 🆕 **New** End-to-end ion tiling and CesiumJS/Unreal rendering of massive vector datasets as 3D Tiles, including terrain and 3D Tiles draping.
- [More design model workflows with Cesium](https://cesium.com/blog/2026/09/16/more-design-model-workflows-with-cesium/) - 🆕 **New** BIM/CAD versioning, change detection, GPU clipping with holes, millimeter-level snapping, and CRS Search in Cesium ion and CesiumJS.

### Videos

- [Cesium YouTube Channel](https://www.youtube.com/cesium) - Official tutorials, demos, and conference talks.
- [Cesium Developer Conference 2026](https://cesium.com/events/cesium-developer-conference/2026/) - 🆕 **New** Free session recordings covering 3D Tiles, Gaussian splats, digital twins, Unity/Unreal, and WebXR.

## Framework Integration

### Angular

- [cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example) - ![GitHub stars](https://img.shields.io/github/stars/Developer-Plexscape/cesium-angular-example?style=flat&logo=github) Integration example with the latest version of Angular.

### Vue

- [vue-cesium](https://github.com/zouyaoji/vue-cesium) - ![GitHub stars](https://img.shields.io/github/stars/zouyaoji/vue-cesium?style=flat&logo=github) Vue 3.x components for CesiumJS with comprehensive third-party library support.
- [cesium-vue3-vite](https://github.com/tingyuxuan2302/cesium-vue3-vite) - ![GitHub stars](https://img.shields.io/github/stars/tingyuxuan2302/cesium-vue3-vite?style=flat&logo=github) Vue 3 + Vite + Cesium template with common 3D visualization scenes.

### React

- [resium](https://github.com/reearth/resium) - ![GitHub stars](https://img.shields.io/github/stars/reearth/resium?style=flat&logo=github) React components for Cesium with TypeScript support and declarative API.

## Game Engine Integration

- [3D Tiles for Godot](https://github.com/Battle-Road-Labs/3D-Tiles-For-Godot) - ![GitHub stars](https://img.shields.io/github/stars/Battle-Road-Labs/3D-Tiles-For-Godot?style=flat&logo=github) Godot 4 GDExtension by Battle Road for streaming 3D Tiles and Cesium ion content into Godot Engine.
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
- [Obj2Tiles](https://github.com/OpenDroneMap/Obj2Tiles) - ![GitHub stars](https://img.shields.io/github/stars/OpenDroneMap/Obj2Tiles?style=flat&logo=github) 🆕 **New** Command-line tool that splits, decimates, and converts OBJ meshes to 3D Tiles.
- [py3dtilers](https://github.com/Oslandia/py3dtilers) - ![GitHub stars](https://img.shields.io/github/stars/Oslandia/py3dtilers?style=flat&logo=github) 🆕 **New** Python tilers that build 3D Tiles from CityGML, IFC, OBJ, GeoJSON, and 3DCityDB.
- [glTF-Blender-IO](https://github.com/KhronosGroup/glTF-Blender-IO) - ![GitHub stars](https://img.shields.io/github/stars/KhronosGroup/glTF-Blender-IO?style=flat&logo=github) Official Blender add-on for glTF 2.0 import/export. Essential for creating and editing models destined for 3D Tiles.
- [spz](https://github.com/nianticlabs/spz) - ![GitHub stars](https://img.shields.io/github/stars/nianticlabs/spz?style=flat&logo=github) Open-source SPZ file format for 3D Gaussian Splats. About 10x smaller than PLY with virtually no perceptible loss. Offered by Niantic Labs.

### AEC & BIM Export

- [cesium-ion-revit-add-in](https://github.com/CesiumGS/cesium-ion-revit-add-in) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-ion-revit-add-in?style=flat&logo=github) Official Autodesk Revit add-in to export designs to Cesium ion as 3D Tiles for CesiumJS and game engines.

## Libraries & Plugins

### UI

- [cesium-navigation](https://github.com/brickhouse-tech/cesium-navigation) - ![GitHub stars](https://img.shields.io/github/stars/brickhouse-tech/cesium-navigation?style=flat&logo=github) TypeScript compass, zoom navigator, and distance scale widgets for CesiumJS (v6, zero legacy dependencies).
- [cesium-extends](https://github.com/hongfaqiu/cesium-extends) - ![GitHub stars](https://img.shields.io/github/stars/hongfaqiu/cesium-extends?style=flat&logo=github) Modular CesiumJS extension suite for measure, draw, tooltip, popup, dual-viewer sync, compass, heatmap, and GeoJSON styling.
- [cesium-transform-controls](https://github.com/123164867376464646/cesium-transform-controls) - ![GitHub stars](https://img.shields.io/github/stars/123164867376464646/cesium-transform-controls?style=flat&logo=github) 🆕 **New** Visual translate, rotate, and scale gizmo for Cesium entities and models.
- [cesium-player-controller](https://github.com/hh-hang/cesium-player-controller) - ![GitHub stars](https://img.shields.io/github/stars/hh-hang/cesium-player-controller?style=flat&logo=github) 🆕 **New** First- and third-person character controller with capsule collision, animations, and camera obstacle avoidance.

### Data Visualization

- [ol-cesium](https://github.com/openlayers/ol-cesium) - ![GitHub stars](https://img.shields.io/github/stars/openlayers/ol-cesium?style=flat&logo=github) OpenLayers - Cesium integration for 2D/3D map switching.
- [3DTilesRendererJS](https://github.com/NASA-AMMOS/3DTilesRendererJS) - ![GitHub stars](https://img.shields.io/github/stars/NASA-AMMOS/3DTilesRendererJS?style=flat&logo=github) 3D Tiles renderer for Three.js, alternative to Cesium for 3D Tiles visualization.
- [cesium-vectortile-gl](https://github.com/mesh-3d/cesium-vectortile-gl) - ![GitHub stars](https://img.shields.io/github/stars/mesh-3d/cesium-vectortile-gl?style=flat&logo=github) Native Primitive vector tile renderer for MVT/GeoJSON with MapLibre style support, batching, and GPU culling.
- [cesium-wind-layer](https://github.com/hongfaqiu/cesium-wind-layer) - ![GitHub stars](https://img.shields.io/github/stars/hongfaqiu/cesium-wind-layer?style=flat&logo=github) GPU-accelerated wind field particle visualization with terrain occlusion support.
- [cesium-clouds-atmosphere](https://github.com/yuwoniu03/cesium-clouds-atmosphere) - ![GitHub stars](https://img.shields.io/github/stars/yuwoniu03/cesium-clouds-atmosphere?style=flat&logo=github) 🆕 **New** Volumetric clouds, Bruneton atmosphere, aerial perspective, and lens flare rendering for CesiumJS.

### Data Providers

- [zarr-cesium](https://github.com/noc-oi/zarr-cesium) - ![GitHub stars](https://img.shields.io/github/stars/noc-oi/zarr-cesium?style=flat&logo=github) CesiumJS providers for streaming Zarr environmental and geospatial data from cloud object stores.
- [Cesium-GeoserverTerrainProvider](https://github.com/kaktus40/Cesium-GeoserverTerrainProvider) - GeoServer integration for various elevation data formats.

### Material & Shader Effects

- [Custom Shader Guide](https://github.com/CesiumGS/cesium/blob/main/Documentation/CustomShaderGuide/README.md) - Official guide for CesiumJS `CustomShader` on models and 3D Tiles.
- [CustomShader API](https://cesium.com/learn/cesiumjs/ref-doc/CustomShader.html) - API reference for user-defined GLSL materials and lighting hooks.

### GPS & Tracking

- [cesium-gpx-viewer](https://github.com/Duckiduc/cesium-gpx-viewer) - ![GitHub stars](https://img.shields.io/github/stars/Duckiduc/cesium-gpx-viewer?style=flat&logo=github) GPX file viewer built with React.js for GPS track visualization.

## Performance & Optimization

- [cesium-gpu-points-layer](https://github.com/vadimrostok/cesium-gpu-points-layer) - ![GitHub stars](https://img.shields.io/github/stars/vadimrostok/cesium-gpu-points-layer?style=flat&logo=github) GPU-accelerated primitive for rendering and animating millions of dynamic markers with billboard-style performance.

## AI Integration

The Cesium ecosystem is rapidly integrating with AI systems. This section covers MCP servers, agent skills, and AI-assisted geospatial workflows.

### MCP Servers

- [cesium-ai-integrations](https://github.com/CesiumGS/cesium-ai-integrations) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-ai-integrations?style=flat&logo=github) Official Cesium collection of MCP servers (`mcp/`), agent skills (`skills/`), and reference apps for connecting AI systems with CesiumJS.
- [cesium-mcp](https://github.com/gaopengbin/cesium-mcp) - ![GitHub stars](https://img.shields.io/github/stars/gaopengbin/cesium-mcp?style=flat&logo=github) Community MCP ecosystem with 60+ tools via `cesium-mcp-bridge`, `cesium-mcp-runtime`, and `cesium-mcp-dev` for browser, IDE, and stdio/WebSocket agent control.

### Agent Skills & Tools

- [cesiumjs-skills](https://github.com/CesiumGS/cesiumjs-skills) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesiumjs-skills?style=flat&logo=github) 🆕 **New** Official curated agent skills for CesiumJS development in AI coding assistants.
- [Cesium-Skills](https://github.com/OpenCesium/Cesium-Skills) - ![GitHub stars](https://img.shields.io/github/stars/OpenCesium/Cesium-Skills?style=flat&logo=github) 🆕 **New** Community CesiumJS agent skills with ~185 JS examples covering terrain, 3D Tiles, and effects for Cursor, Codex, and Claude.
- [cesiumjs-ai-starter-app](https://github.com/CesiumGS/cesiumjs-ai-starter-app) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesiumjs-ai-starter-app?style=flat&logo=github) 🆕 **New** Official starter pairing a CesiumJS globe with an LLM chat UI, server-side tool calling, and sandboxed CesiumJS codegen.

## SDK & Development Frameworks

- [dc-sdk](https://github.com/dvt3d/dc-sdk) - ![GitHub stars](https://img.shields.io/github/stars/dvt3d/dc-sdk?style=flat&logo=github) WebGIS application framework optimized for rapid development and deployment.
- [mars3d](https://github.com/marsgis/mars3d) - ![GitHub stars](https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github) Mars3D platform for B/S architecture 3D client development with industry extensions.

## Open Source Projects

- [Cesium-Examples](https://github.com/jiawanlong/Cesium-Examples) - ![GitHub stars](https://img.shields.io/github/stars/jiawanlong/Cesium-Examples?style=flat&logo=github) Comprehensive collection of 200+ CesiumJS examples including analysis, visualization, and data loading.

## Applications

- [cesium-flight-simulator](https://github.com/WilliamAvHolmberg/cesium-flight-simulator) - ![GitHub stars](https://img.shields.io/github/stars/WilliamAvHolmberg/cesium-flight-simulator?style=flat&logo=github) 🆕 **New** Browser flight and ground vehicle simulator on real-world Cesium terrain with React and TypeScript.
- [GeoLibre](https://github.com/opengeos/GeoLibre) - ![GitHub stars](https://img.shields.io/github/stars/opengeos/GeoLibre?style=flat&logo=github) 🆕 **New** Cloud-native GIS platform with optional CesiumJS 3D globe panes camera-synced to MapLibre 2D maps.
- [velocity](https://github.com/AndrewCTF/velocity) - ![GitHub stars](https://img.shields.io/github/stars/AndrewCTF/velocity?style=flat&logo=github) 🆕 **New** Self-hosted OSINT situation console fusing aircraft, ships, satellites, quakes, and conflict events on one Cesium globe.
- [Lookout](https://github.com/ExtremeAI-Labs/lookout) - ![GitHub stars](https://img.shields.io/github/stars/ExtremeAI-Labs/lookout?style=flat&logo=github) 🆕 **New** Self-hosted 3D situational-awareness console fusing live aircraft, ships, satellites, quakes and public cameras on a Cesium globe, with hash-sealed case recording.
- [worldwideview](https://github.com/silvertakana/worldwideview) - ![GitHub stars](https://img.shields.io/github/stars/silvertakana/worldwideview?style=flat&logo=github) Modular real-time situational awareness platform with plugin architecture for live geospatial data on a CesiumJS globe.
- [satellite-js](https://github.com/shashwatak/satellite-js) - ![GitHub stars](https://img.shields.io/github/stars/shashwatak/satellite-js?style=flat&logo=github) Satellite orbit calculation library from TLE data, commonly used with Cesium for orbit visualization.
- [satvis](https://github.com/Flowm/satvis) - ![GitHub stars](https://img.shields.io/github/stars/Flowm/satvis?style=flat&logo=github) Advanced satellite orbit visualization and pass prediction.
- [3D-Wind-Field](https://github.com/RaymanNg/3D-Wind-Field) - ![GitHub stars](https://img.shields.io/github/stars/RaymanNg/3D-Wind-Field?style=flat&logo=github) 3D wind field visualization on Cesium globe. See [cesium-wind-layer](https://github.com/hongfaqiu/cesium-wind-layer) for a maintained GPU-accelerated library.
- [TerriaJS](https://github.com/TerriaJS/terriajs) - ![GitHub stars](https://img.shields.io/github/stars/TerriaJS/terriajs?style=flat&logo=github) Library for building rich geospatial 2D & 3D data platforms with Cesium support.
- [MapStore2](https://github.com/geosolutions-it/MapStore2) - ![GitHub stars](https://img.shields.io/github/stars/geosolutions-it/MapStore2?style=flat&logo=github) Open-source framework for creating and sharing maps, dashboards, and geostories with 3D Cesium support.
- [SuperMap iClient-JavaScript](https://github.com/SuperMap/iClient-JavaScript) - ![GitHub stars](https://img.shields.io/github/stars/SuperMap/iClient-JavaScript?style=flat&logo=github) Modern GIS web client supporting Leaflet, OpenLayers, MapboxGL, and CesiumJS. Enhanced with ECharts, D3, and MapV.

## Data Sources & Platform

- [Cesium Ion](https://ion.cesium.com/) - Cloud platform for streaming, hosting, and processing 3D geospatial content; includes terrain, imagery, 3D Tiles, and photogrammetry.
- [OpenStreetMap](https://www.openstreetmap.org/) - Collaborative mapping platform providing global map data.
- [Natural Earth](https://www.naturalearthdata.com/) - Public domain map dataset for cartographers.
- [PMTiles](https://github.com/protomaps/PMTiles) - ![GitHub stars](https://img.shields.io/github/stars/protomaps/PMTiles?style=flat&logo=github) Map tiles in a single file on static storage. Enables offline-capable, self-hosted tile serving compatible with Cesium.

## Tools

- [3d-tiles-tools](https://github.com/CesiumGS/3d-tiles-tools) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles-tools?style=flat&logo=github) Official CLI for converting, merging, upgrading, compressing, and analyzing 3D Tiles tilesets.
- [3d-tiles-validator](https://github.com/CesiumGS/3d-tiles-validator) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/3d-tiles-validator?style=flat&logo=github) Official validator for 3D Tiles tilesets.
- [spz-loader](https://github.com/drumath2237/spz-loader) - ![GitHub stars](https://img.shields.io/github/stars/drumath2237/spz-loader?style=flat&logo=github) WASM loader for the `.spz` 3D Gaussian Splatting format. CesiumJS uses the `@spz-loader/core` package.
- [cesiumjs-workshop](https://github.com/CesiumGS/cesiumjs-workshop) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesiumjs-workshop?style=flat&logo=github) Deep dive workshop materials from the 2025 Cesium Developer Conference.
- [cesium-vite-example](https://github.com/CesiumGS/cesium-vite-example) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-vite-example?style=flat&logo=github) Official minimal Vite setup for CesiumJS applications.
- [vite-plugin-cesium](https://github.com/nshen/vite-plugin-cesium) - ![GitHub stars](https://img.shields.io/github/stars/nshen/vite-plugin-cesium?style=flat&logo=github) Community Vite plugin for zero-config Cesium static asset handling and bundling. Official AI tutorials still recommend it; see vite-plugin-cesium-build for a more recently maintained alternative.
- [vite-plugin-cesium-build](https://github.com/s3xysteak/vite-plugin-cesium-build) - ![GitHub stars](https://img.shields.io/github/stars/s3xysteak/vite-plugin-cesium-build?style=flat&logo=github) Vite plugin that automates Cesium asset copy and build config, with optional `@cesium/engine` support.
- [3DTiles-Inspector](https://github.com/WilliamLiu-1997/3DTiles-Inspector) - ![GitHub stars](https://img.shields.io/github/stars/WilliamLiu-1997/3DTiles-Inspector?style=flat&logo=github) 🆕 **New** Interactive 3D Tiles editor for geospatial transform alignment, geometric error tuning, and Gaussian splat cropping.

## Ecosystem

- [cesium-omniverse](https://github.com/CesiumGS/cesium-omniverse) - ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium-omniverse?style=flat&logo=github) Cesium connector for NVIDIA Omniverse.

## Future & Emerging

Technologies and directions shaping the Cesium ecosystem.

**AI & MCP** — Sandcastle Copilot (BYOK) for in-browser coding help; official `cesiumjs-skills`, `cesium-ai-integrations`, and `cesiumjs-ai-starter-app`; community `cesium-mcp` for natural language 3D globe control.

**3D Gaussian Splatting** — Production path via `KHR_gaussian_splatting` and `KHR_gaussian_splatting_compression_spz_2`, plus `spz-loader`. CesiumJS 1.144 adds spherical harmonics, large-dataset stability, and decode/sort performance work.

**Native vector in 3D Tiles** — Vector Tiles technology preview in Cesium ion, CesiumJS, and Cesium for Unreal. CesiumJS 1.144–1.145 drape clamped polygons and polylines onto terrain and 3D Tiles with `Cesium3DTileStyle`. Earlier 1.142 APIs include `MVTDataProvider` and `GeoJsonPrimitive`.

**3D Tiles 2.0** — Vector payloads, `KHR_mesh_primitive_restart`, and `EXT_mesh_polygon` are steps toward 3D Tiles 2.0. Follow the Cesium Blog for ratification news.

**BIM/CAD design models** — ion BIM/CAD Tiler with Database, model versioning, and Change Detection API. CesiumJS adds GPU `ClippingPolygons` with holes plus experimental `IonSnapService` and `Scene.snap` for millimeter-level snap-to-source geometry.

**Cesium ion** — Cloud platform for streaming, tiling, photogrammetry, Vector Tiles preview, and BIM/CAD hosting. The default for production deployments.

**Game Engines** — Unity (web deployable), Unreal, and Godot bring Cesium and 3D Tiles to real-time engines.

**Omniverse & WebXR** — cesium-omniverse for NVIDIA Omniverse; archived cesium-webxr for VR/AR experiments.

## Archived / Legacy

> Resources below are no longer actively maintained (24+ months inactive). Kept for reference; use with caution.

### Terrain & Data Processing

- [cesium-terrain-builder](https://github.com/geo-data/cesium-terrain-builder) (2021) - C++ library for terrain tiles.
- [Cesium Terrain Server](https://github.com/geo-data/cesium-terrain-server) (2021) - Filesystem-based terrain serving.
- [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF) (2020) - COLLADA to glTF conversion.
- [cesium-point-cloud-generator](https://github.com/tum-gis/cesium-point-cloud-generator) (2021) - Java point cloud tool.
- [citygml-to-3dtiles](https://github.com/njam/citygml-to-3dtiles) (2024) - Experimental CityGML to 3D Tiles converter. See [py3dtilers](https://github.com/Oslandia/py3dtilers) for a maintained alternative.

### Plugins & UI

- [cesium-plugins](https://github.com/syzdev/cesium-plugins) (2021) - Coordinate picking, flooding analysis, overlays.
- [Cesium-Plugin](https://github.com/bingqixuan/Cesium-Plugin) (2021) - Measurement, context menus.
- [CesiumVectorTile](https://github.com/MikesWei/CesiumVectorTile) (2021) - Vector tile provider. See [cesium-vectortile-gl](https://github.com/mesh-3d/cesium-vectortile-gl) for a modern alternative.
- [cesium-drawhelper](https://github.com/leforthomas/cesium-drawhelper) (2016) - Shape editor.
- [CesiumExp-measure](https://github.com/gitgitczl/CesiumExp-measure) (2021) - Measurement plugin.
- [CesiumMeshVisualizer](https://github.com/MikesWei/CesiumMeshVisualizer) (2021) - Three.js geometry in Cesium.
- [CesiumRoadImageFlowMaterial](https://github.com/WaterSeeding/CesiumRoadImageFlowMaterial) (2022) - Road flow material.
- [cesium-webxr](https://github.com/pupitetris/cesium-webxr) (2024) - POC for WebXR VR/AR experiences in Cesium.

### Tools & Samples

- [3d-tiles-samples](https://github.com/CesiumGS/3d-tiles-samples) (2024) - Sample tilesets for learning and testing 3D Tiles.

### Examples & Demos

- [Cesium.HPUZYZ.Demo](https://github.com/YanzheZhang/Cesium.HPUZYZ.Demo) - (2021).
- [ExamplesforCesium](https://github.com/pasu/ExamplesforCesium) - (2022).
- [Nick_Learns_CesiumJS](https://github.com/Ice-and-Rock/Nick_Learns_CesiumJS) - (2022).
- [Gesture-Controlled-3D-World](https://github.com/ps428/Gesture-Controlled-3D-World) - (2021).

### Deprecated (Removed)

- Removed from this list: *angular-cesium* (2019), *cesium-vue* (2018), *d3cesium* (2015), *cesium-vr* (2015). See Git history.

## Related Lists

- [Awesome 3D Tiles](https://github.com/pka/awesome-3d-tiles) - Broader 3D Tiles ecosystem beyond CesiumJS.
- [Awesome Frontend GIS](https://github.com/JoeWDavies/awesome-frontend-gis) - Browser GIS frameworks, tools, and demos.
- [Awesome GIS](https://github.com/sshuair/awesome-gis) - General geospatial tools, libraries, and learning resources.
- [Awesome Geospatial](https://github.com/sacridini/Awesome-Geospatial) - Large curated index of geospatial software across languages.

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

> Last updated: September 2026
> Active resources: 85
> Archived (legacy): 18
> Categories: 16

Curated for CesiumJS 1.x (currently 1.145). Only actively maintained resources in the main list. See [Inclusion Criteria](docs/INCLUSION_CRITERIA.md).

---

**Language:** [English](README.md) | [简体中文](readme-zh.md)
