/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#faf8f5',
          100: '#f0ece1',
          200: '#e6dfd5',
          300: '#d4a359',
          400: '#c29247',
          500: '#143d2b',
          600: '#0c2217',
          700: '#07150e',
          800: '#050e09',
          900: '#020704',
          950: '#010302',
        },
        terracotta: {
          50: '#fdf5f2',
          100: '#fae7e1',
          500: '#b85d34',
          600: '#9e4e2a',
          700: '#813f21',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        brand: {
          teal: '#15a18d',
          'teal-light': '#18b8a2',
          'teal-dark': '#0f7d6e',
          charcoal: '#373737',
          rust: '#c25d33'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', '"Amiri"', 'serif'],
        arabic: ['Amiri', 'Traditional Arabic', 'serif'],
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'aurora': 'auroraWave 12s ease infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'spin-slow': 'spinSlow 30s linear infinite',
        'spin-reverse': 'spinSlowReverse 35s linear infinite',
        'particle-drift': 'particleDrift 9s ease-in-out infinite',
        'geometric-pulse': 'geometricPulse 10s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
