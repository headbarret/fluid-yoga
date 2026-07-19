/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F5F2EB',          // warm river sand (text/light elements)
        slate: '#2E3732',         // warm dark slate (card backgrounds/blocks)
        darkslate: '#1E2521',     // extra deep slate green (main page background)
        graphite: '#2C2C2C',      // soft dark graphite
        terracotta: '#C58B75',    // smoky terracotta accent (warm earthy orange)
        sagelight: '#C8D3CC',     // muted light green/sage (readability body text)
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'breathe-slow': 'breathe 8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        'float-letter': 'float-letter 3s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { letterSpacing: '-0.01em' },
          '50%': { letterSpacing: '0.08em' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(197, 139, 117, 0.4)' },
          '50%': { transform: 'scale(1.025)', boxShadow: '0 0 0 8px rgba(197, 139, 117, 0)' },
        },
        'float-letter': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
