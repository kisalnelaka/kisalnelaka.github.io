import CONFIG from './gitprofile.config';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#FF3366",      // Harsh Neon Pink/Red
        secondary: "#00F0FF",    // Cyan
        accent: "#FBED04",       // Bright Yellow
        "bg-dark": "#050505",    // Near absolute black
        "bg-card": "#FFFFFF",    // Stark white for brutal cards
        "text-main": "#FFFFFF",
        "text-dim": "#D4D4D4",
        "text-muted": "#9CA3AF",
        "brutal-black": "#000000",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'Courier New', 'monospace'],
        display: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      ...CONFIG.themeConfig.themes,
      { procyon: CONFIG.themeConfig.customTheme },
    ],
  },
};
