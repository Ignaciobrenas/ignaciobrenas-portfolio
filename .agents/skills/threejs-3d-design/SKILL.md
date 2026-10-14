---
name: threejs-3d-design
description: >-
  Procedures, best practices, and recipes for designing interactive 3D WebGL scenes using Three.js
  and React Three Fiber (R3F). Covers camera controls, lighting setups, custom materials,
  particle systems, orbital constellations, performance optimization, and responsive Canvas sizing.
  Use whenever creating, tuning, or troubleshooting 3D web experiences and animations.
---

# 3D Web & Three.js Design Skill

This skill guides the agent in building high-performance, visually stunning 3D graphics in modern web applications.

---

## 1. Scene Composition & Lighting

- **Three-Point Lighting Rule:**
  - **Key Light:** Directional light angled 45 degrees, warm or colored accent (`intensity={1.2}`).
  - **Fill Light:** Ambient light or secondary directional light to soften harsh shadows (`intensity={0.4}`).
  - **Rim / Edge Light:** Backlight placed behind objects for specular edge silhouette highlights (`color="#38bdf8" intensity={3}`).
- **Point Lights for Emissive Glow:**
  - Place point lights near glowing materials with attenuation (`distance={10-15}`).
- **Background Ambiance:**
  - Use `alpha: true` on Canvas to blend 3D seamlessly with CSS gradients, particles, and cyber grids.

---

## 2. Materials & Aesthetics

- **Wireframe Holograms:**
  - Geometry: `icosahedronGeometry` or `torusKnotGeometry`.
  - Material: `meshStandardMaterial` with `wireframe: true`, bright emissive color (`emissive="#0284c7"`), and low roughness.
- **Glowing Core & Orbitals:**
  - Combine an inner opaque high-emissive core with an outer wireframe cage rotating at a different angular speed.
  - Ring trails using `ringGeometry` with `THREE.DoubleSide` and low opacity (`opacity={0.12}`).
- **Particle Fields:**
  - Use `THREE.Points` with `bufferGeometry` and `bufferAttribute` positions.
  - Enable `THREE.AdditiveBlending` and transparency for glowing nebula/starfield effects.

---

## 3. Performance & 60fps Optimization

- **Frame Delta Over Clocks:**
  - Always use `useFrame((_, delta) => { rotation += delta * speed })` instead of deprecated `THREE.Clock` or unbounded increments.
- **Prevent React 19 Sub-Root Conflicts:**
  - Avoid rendering many `<Html>` components from `@react-three/drei` inside a single Canvas, as each spawns a distinct React root that can conflict during unmount/HMR.
  - Prefer rendering tooltips and HUD overlays in the React DOM layer outside the Canvas, driven by 3D event handlers (`onPointerOver`, `onClick`).
- **Instancing:**
  - For more than 100 duplicate geometries, use `instancedMesh` rather than separate mesh components.
- **DPR Scaling:**
  - Limit device pixel ratio: `dpr={[1, 1.5]}` to prevent GPU throttling on high-DPI displays.
- **Power Preference:**
  - Set `gl={{ powerPreference: 'high-performance' }}` for smooth frame rates.
