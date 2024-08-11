import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'purple-composition': "url('../../public/purple-composition.png')",
        pattern: "url('../../public/pattern.png')",
        stars: "url('../../public/stars.png')",
        'gradient-black':
          'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
        // stars: "url('../public/purple-composition.png')",
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

        'gradient-radial':
          // 'radial-gradient(circle at center, #7637db 0%, transparent 50%, transparent 100%)',
          'radial-gradient(circle at bottom right, #7637db 0%, transparent 75%, transparent 100%)',
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
export default config
