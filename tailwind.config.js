/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFBFC',
        surface: '#FFFFFF',
        foreground: '#0F172A',
        muted: '#F1F5F9',
        mutedForeground: '#64748B',
        border: '#E2E8F0',
        borderLight: '#F1F5F9',
        brand: {
          indigo: '#6366F1',
          purple: '#8B5CF6',
          pink: '#EC4899',
          rose: '#F43F5E',
          coral: '#FB7185',
          amber: '#F59E0B',
          yellow: '#EAB308',
          emerald: '#10B981',
          teal: '#14B8A6',
          cyan: '#06B6D4',
          blue: '#3B82F6',
        },
      },
      fontFamily: {
        heading: ['"Outfit"', 'sans-serif'],
        sans: [
          '"Plus Jakarta Sans"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(0, 0, 0, 0.03)',
        card: '0 4px 24px -2px rgba(15, 23, 42, 0.06), 0 2px 8px -2px rgba(15, 23, 42, 0.03)',
        'card-hover':
          '0 20px 40px -12px rgba(99, 102, 241, 0.15), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
        'glow-indigo': '0 12px 36px -6px rgba(99, 102, 241, 0.28)',
        'glow-rose': '0 12px 36px -6px rgba(244, 63, 94, 0.28)',
        'glow-amber': '0 12px 36px -6px rgba(245, 158, 11, 0.28)',
        'glow-emerald': '0 12px 36px -6px rgba(16, 185, 129, 0.28)',
        'glow-cyan': '0 12px 36px -6px rgba(6, 182, 212, 0.28)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'blob-spin': 'blobSpin 25s infinite linear',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blobSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.08)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
