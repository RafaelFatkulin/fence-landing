/** @type {import("tailwindcss").Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./resources/**/*.edge', './resources/**/*.{js,ts,jsx,tsx,vue}'],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-first', '&:not(:first-child)')
    }),
  ],
  // important: true,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: '.75rem',
      screens: {
        '2xl': '1424px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        black: 'hsl(var(--black))',
        muted: 'hsla(var(--muted))',
        white: 'hsl(var(--white))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        text: 'hsl(var(--text))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
}
