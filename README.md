# KISAL NELAKA // PORTFOLIO 

```text
> SYSTEM ARCHITECTURE & DIGITAL FORENSICS 
> ENGINEERED FOR SCALE. NO COMPROMISE.
```

A brutally engineered, highly optimized, and aesthetically distinct personal portfolio built for resilience and raw technical presentation. Stripped of soft UI paradigms, this interface operates on high-contrast logic, absolute positioning, and functional interactivity.

![Brutalist UI Full View](https://raw.githubusercontent.com/kisalnelaka/kisalnelaka.github.io/main/screenshot.png) <!-- Note: Add a screenshot of the new UI later -->

## CORE TECHNICAL FEATURES
- **Terminal CLI Interface**: Integrated `sys.term` environment allowing direct user-to-system text queries (`whoami`, `contact`, `resume`).
- **Draggable Dialog Architecture**: Interactive "Windows 95" style draggable project and experience logs utilizing `framer-motion` for physics-based constraint manipulation.
- **Raw Mode Transmission**: A system-level toggle that overrides the GUI to present pure architectural wireframes and monospace data blocks.
- **Determined Brutalist Aesthetics**: Zero rounded corners, zero soft gradients. 100% monolithic text, absolute black (`#050505`), stark white, and high-visibility neon accents.

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
