/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E40AF',
        'secondary': '#9333EA',
        'background-light': '#F9FAFB',
        'background-dark': '#1F2937',
        'card-light': '#FFFFFF',
        'card-dark': '#374151',
        'text-light': '#1F2937',
        'text-dark': '#F9FAFB',
        'border-light': '#E5E7EB',
        'border-dark': '#4B5563',
        'accent-light': '#D4A373',
        'accent-dark': '#A66B4F',
        'accent-soft': '#E8C4A0',
      },
    },
    screens: {
      'xs': '475px',
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  darkMode: 'class',
};