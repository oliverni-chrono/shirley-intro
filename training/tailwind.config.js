/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme
        'bg-primary': '#000000',
        'bg-elevated': '#0A0A0A',
        'surface': '#111111',
        'surface-elevated': '#1A1A1A',
        // Platforms
        'hinge': {
          DEFAULT: '#F55276',
          light: '#FF6B8A',
          dark: '#D9465F',
        },
        'tinder': {
          DEFAULT: '#FF6B6B',
          light: '#FF8585',
          dark: '#E65555',
        },
        // Text
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'text-muted': '#666666',
        // UI
        'border': '#222222',
        'border-hover': '#333333',
      },
      borderRadius: {
        'custom': '24px',
        'card': '24px',
        'xl': '32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

