export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#EC4899',
          secondary: '#A855F7',
          accent: '#F472B6',
          dark: '#1F2937',
          light: '#FEF2F2',
          cream: '#FFF8F3',
          leaf: '#2F855A',
          sun: '#FBBF24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        bloom: '0 22px 70px rgba(236, 72, 153, 0.18)',
      },
      borderRadius: {
        organic: '38% 62% 48% 52% / 52% 38% 62% 48%',
      },
    },
  },
  plugins: [],
};
