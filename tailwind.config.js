/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: "#FDFDFD", // Very light gray / off-white
        surface: "#FFFFFF",
        primary: "#2C3E50", // Muted dark blue for primary text/icons
        secondary: "#6B7A8F", // Muted blue-grey
        accent: "#EAEAEA", // Light gray for borders/dividers
        success: "#A8BCA1", // Soft green
        warning: "#E5D0A1", // Soft yellow
        textMain: "#1A1A1A", // Dark gray, softer than black
        textMuted: "#888888",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.03)',
        'soft-hover': '0 8px 30px rgba(0, 0, 0, 0.06)',
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
          xl: '1140px',
        }
      },
    },
  },
  plugins: [],
};
