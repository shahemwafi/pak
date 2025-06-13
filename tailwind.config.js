/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        'primary-dark': '#1E3A8A',
        secondary: '#059669',
        'secondary-dark': '#047857',
        accent: '#F59E0B',
        'accent-dark': '#D97706',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        arabic: ['var(--font-noto-naskh-arabic)'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'islamic-pattern': "url('/images/islamic-pattern.png')",
      },
    },
  },
  plugins: [],
} 