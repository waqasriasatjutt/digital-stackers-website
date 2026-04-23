import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Deep navy base
        navy: {
          50:  '#e6e9f5',
          100: '#c3c9e4',
          200: '#939dc8',
          300: '#6571aa',
          400: '#3e4a85',
          500: '#232f63',
          600: '#172249',
          700: '#101935',
          800: '#0a0e27',
          900: '#060a1c',
          950: '#03060f',
        },
        // Electric cyan accent
        cyan: {
          50:  '#e6fbff',
          100: '#b8f2ff',
          200: '#80e8ff',
          300: '#47dcff',
          400: '#1ccffa',
          500: '#00d4ff',
          600: '#00a7d6',
          700: '#0082a8',
          800: '#005f7a',
          900: '#003f52',
        },
        // Supporting accent — warm lime for CTAs / highlights
        lime: {
          400: '#c5ff4f',
          500: '#9eff00',
          600: '#7cd100',
        },
        ink: {
          50:  '#f7f8fa',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b0b9c8',
          400: '#8592a8',
          500: '#66748e',
          600: '#525e75',
          700: '#444d5f',
          800: '#3a4251',
          900: '#21252d',
          950: '#0a0e27',
        },
      },
      maxWidth: {
        '8xl': '88rem',
      },
      backgroundImage: {
        'ds-gradient': 'linear-gradient(135deg, #0a0e27 0%, #172249 50%, #005f7a 100%)',
        'ds-cyan':     'linear-gradient(135deg, #00d4ff 0%, #0082a8 100%)',
        'ds-hero':     'radial-gradient(circle at 20% 10%, rgba(0,212,255,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 90%, rgba(158,255,0,0.12) 0%, transparent 50%), linear-gradient(180deg, #0a0e27 0%, #060a1c 100%)',
      },
      boxShadow: {
        'ds-glow': '0 0 40px rgba(0, 212, 255, 0.25)',
        'ds-card': '0 20px 50px -20px rgba(0, 212, 255, 0.15)',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [typography],
};
