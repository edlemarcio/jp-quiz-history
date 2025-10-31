import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',
          light: '#3B82F6',
          dark: '#1E3A8A'
        },
        accent: '#F59E0B',
        background: '#0F172A'
      }
    }
  },
  plugins: []
} satisfies Config;
