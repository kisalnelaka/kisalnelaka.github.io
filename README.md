# Kisal Nelaka | Professional Portfolio

> **Full-Stack Software Engineer & Systems Architect**  
> Architecting resilient, high-performance systems.

A meticulously engineered, highly optimized, and aesthetically premium personal portfolio. Designed to reflect an "old money," sophisticated professional persona with a hint of confident intensity. This interface utilizes a sleek, spatial dark mode featuring glassmorphism, subtle animations, and strict typographic hierarchy to focus heavily on enterprise capabilities.

## 🌟 CORE DESIGN FEATURES

- **Premium Spatial Dark Mode**: A deep spatial dark background (`#0a0f18`) enhanced with large, slowly animating glowing orbs to provide depth and dynamism.
- **Glassmorphic UI**: Components feature a frosted glass effect using `backdrop-blur`, semi-transparent white backgrounds, and soft, ethereal shadows for a premium SaaS feel.
- **Strict Typographic Hierarchy**: Clean, highly legible sans-serif typography utilizing `Inter`, structured to guide hiring managers and clients directly to core competencies and ROI.
- **Micro-Interactions**: Smooth `slide-up` load animations and hovering component scales that make the application feel responsive and alive without being chaotic.

---

## 🛠️ COMPLETE TECHNOLOGY STACK

- **React 18** + **Vite**: Core Build Engine ensuring lightning-fast HMR and optimized production bundles.
- **Tailwind CSS**: Utility-first styling utilized for building the custom glassmorphic design system and animation keyframes.
- **Lucide-React**: Clean, consistent vector iconography.
- **TypeScript**: Ensuring strict typing and architectural integrity.

---

## 💻 LOCAL DEPLOYMENT & DEVELOPMENT

If you wish to run the development environment locally:

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Setup
1. **Clone the repository**:
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
Since the repository is named `kisalnelaka.github.io`, pushing to `main` acts as the primary deployment trigger using the included `.github/workflows/deploy.yml`.

1. Commit your changes locally.
   ```bash
   git add .
   git commit -m "feat: updated portfolio UI and copy"
   git push origin main
   ```
2. Navigate to your repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Ensure **Source** is set to **GitHub Actions**.
5. The automated Action will build your Vite project and deploy the static files to production. 

---
*Engineered by Kisal Nelaka. All rights reserved.*
