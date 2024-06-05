import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e9e9e9',
          300: '#d9d9d9',
          400: '#b6b6b6',
          500: '#969696',
          600: '#6d6d6d',
          700: '#2f3339',
          800: '#282b2f',
          900: '#1b1b1b',
        },
      },
    },
  },
  plugins: [],
};
export default config;
