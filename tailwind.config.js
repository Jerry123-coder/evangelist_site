/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'animate': {
          '0%, 100%': {
            'clip-path': 'polygon(0 45%, 6% 38%, 20% 27%, 38% 24%, 40% 47%, 49% 64%, 51% 72%, 74% 78%, 79% 75%, 100% 67%, 100% 100%, 0 100%)',
          },
          '50%': {
            'clip-path': 'polygon(0 59%, 5% 71%, 24% 86%, 34% 71%, 41% 64%, 41% 46%, 51% 35%, 74% 21%, 89% 35%, 100% 42%, 100% 100%, 0 100%)',
          },
        },

        'scroll':{
          
        }
      },
      animation: {
        polygon: 'animate 3s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

