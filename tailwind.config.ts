import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Palette
        forest: {
          DEFAULT: '#0A3B24', // Deep Forest Green (Brand Accent)
          light: '#1a5a3e',
          dark: '#052416',
        },
        gold: {
          DEFAULT: '#D4AF37', // Soft Gold
          light: '#E5C158',
          dark: '#B8901E',
        },
        charcoal: {
          DEFAULT: '#1A1A1A', // Charcoal Black
          light: '#333333',
        },
        'light-gray': '#F8F8F8', // Light Gray Background
        'pure-white': '#FFFFFF',  // Fixed: Added quotes around the hyphenated key
      },
      fontFamily: {
        // Typography
        display: ['var(--font-playfair-display)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.875rem', 
        '2xl': '1.25rem',
      },
      boxShadow: {
        'luxury': '0 10px 40px -15px rgba(10, 59, 36, 0.15)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.35)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;