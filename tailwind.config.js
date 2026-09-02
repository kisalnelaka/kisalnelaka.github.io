/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark editorial palette
        background: "#0A0A0A",      // Near-black canvas
        surface: "#111111",         // Card / elevated surface
        surfaceHover: "#1A1A1A",    // Hover state surface
        primary: "#F0F0F0",         // Primary text — off-white
        secondary: "#888888",       // Secondary / muted text
        tertiary: "#444444",        // Borders and dividers
        accent: "#E8FF47",          // Acid yellow — single pop color
        accentDim: "rgba(232, 255, 71, 0.12)",
        success: "#22c55e",
        borderLine: "#1E1E1E",      // Subtle border
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '700' }],
        'heading': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(255,255,255,0.06)',
        'card-hover': '0 0 0 1px rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.4)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1200px',
        },
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
};
