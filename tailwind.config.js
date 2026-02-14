/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': 'var(--bg-primary)',
        'secondary-bg': 'var(--bg-secondary)',
        'accent-cyan': 'var(--accent-cyan)',
        'accent-blue': 'var(--accent-blue)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
      },
      backgroundColor: {
        'glass': 'var(--glass-bg)',
      },
      borderColor: {
        'theme': 'var(--border-color)',
      },
    },
  },
  plugins: [],
}

