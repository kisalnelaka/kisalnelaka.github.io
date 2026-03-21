# KISAL NELAKA // PORTFOLIO 

```text
> SYSTEM ARCHITECTURE & DIGITAL FORENSICS 
> ENGINEERED FOR SCALE. NO COMPROMISE.
```

A brutally engineered, highly optimized, and aesthetically distinct personal portfolio built for resilience and raw technical presentation. Stripped of soft UI paradigms, this interface operates on high-contrast logic, absolute positioning, and functional interactivity.

![Brutalist UI Full View](https://raw.githubusercontent.com/kisalnelaka/kisalnelaka.github.io/main/screenshot.png) <!-- Note: Add a screenshot of the new UI later -->

## CORE TECHNICAL FEATURES
- **Central Control Node HUD**: A real-time system controller allowing users to manually toggle safe modes, audio FX, P2P protocols, and CRT aesthetics.
- **CRT Monitor Simulation**: High-fidelity fisheye lens warp, RGB scanline arrays, and vignette flickering subroutines that wrap the terminal and raw data views.
- **Physics Engine Meltdown**: Powered by `matter-js`, triggers a gravitational collapse of the viewport, calculating rigid body momentum for every functional DOM node. 
- **WebGL Intercept Routing (TraceRoute)**: `react-globe.gl` and `Three.js` integration drawing actual coordinate arcs from the local client IP (via stable `GeoJS` intercept) straight to Doha HQ.
- **WebRTC P2P Dark Terminal**: A fully functional peer-to-peer data stream. `PeerJS` overrides the CLI environment, enabling an encrypted anonymous chatroom between terminal instances.
- **Audio-Reactive Subroutines**: Hooks the `AudioContext` mic feed into the core CSS engine, physically distorting geometry and hue filters based on ambient room decibels.
- **Self-Destruct Sequence**: A catastrophic DOM event that flashes an alarm siren and deletes the portfolio from memory. Features an emergency `[ ABORT PURGE ]` rescue vector.
- **Window Exploit Payload**: Overrides the primary layout grid by rendering 15 draggable, fake kernel panic popups overlapping the active UI stream.
- **God-Mode Terminal Override**: The secret Konami-code protocol unlocks a specialized `SYS.ROOT` superuser environment with classified logs.
- **Determined Brutalist Aesthetics**: Zero rounded corners, zero soft gradients. 100% monolithic text, absolute black (`#050505`), and high-visibility neon accents.

---

## 🛠️ COMPLETE TECHNOLOGY STACK
- `React 18` + `Vite` (Core Build Engine)
- `Tailwind CSS` (Monolithic Cyberpunk Typography)
- `Framer Motion` (Kinetic Typography & Drag Vectors)
- `Matter.js` (DOM Rigid Body Mechanics)
- `Three.js` & `react-globe.gl` (WebGL Geospatial Engine)
- `PeerJS` & `WebRTC` (Serverless Networking Channels)
- `Lucide-React` (Vector Iconography)

---

## 💻 LOCAL DEPLOYMENT & DEVELOPMENT

If you want to pull this down and run it locally, follow these steps. 

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Setup
1. **Clone the matrix**:
   ```bash
   git clone https://github.com/kisalnelaka/kisalnelaka.github.io.git
   cd kisalnelaka.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Initialize the dev server**:
   ```bash
   npm run dev
   ```
   The local environment will boot at `http://localhost:5173/`. 

---

## 🚀 PRODUCTION DEPLOYMENT GUIDELINES

This repository is built as a static Vite application and designed to deploy autonomously to **GitHub Pages**. 

### Standard CI/CD Deployment (GitHub Actions)
Since the repository is named `kisalnelaka.github.io`, pushing to `main` acts as the primary deployment trigger if GitHub Actions are enabled.

1. Commit your changes locally.
   ```bash
   git add .
   git commit -m "feat: updated system logs and projects"
   git push origin main
   ```
2. Navigate to your repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Ensure **Source** is set to **GitHub Actions**.
5. Wait for the automated Action to build your Vite project and deploy the static files to production. 

### Manual Build & Deploy (Fallback)
If you prefer forcing a manual build to inspect the output:
```bash
npm run build
```
This generates a highly optimized `dist/` directory containing the final HTML/CSS/JS bundles. You can serve this locally using `npx serve dist` to test the production bundle before executing a push.

---
*Engineered by Kisal Nelaka. All rights reserved.*
