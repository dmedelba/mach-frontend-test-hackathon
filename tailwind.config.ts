import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mach-purple':    '#6E00FF',
        'mach-purple-2':  '#760EFF',
        'mach-cyan':      '#00E5FF',
        'mach-gray':      '#F6F7F9',
        'mach-offwhite':  '#EFEFEF',
        'mach-dark':      '#333333',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
