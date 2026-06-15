/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Dakahlia palette
          green: '#04793e',       // deep green (primary)
          'green-dark': '#035a2e',
          'green-light': '#62bc54', // secondary
          yellow: '#e2e01b',      // accent
          cream: '#faf8ee',       // tinted off-white
          ink: '#0d1f17',         // deep green-black for text
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        ar: ['"Noto Sans Arabic"', 'sans-serif'],
        'ar-display': ['"Noto Sans Arabic"', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'sway': 'sway 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
