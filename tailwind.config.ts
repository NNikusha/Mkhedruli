import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './common/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainPageOnebg : "url('/images/mainPhoto.png')",
        mainPageThreebg : "url('/images/background.svg')"
      },
    },
  },
  plugins: [],
}
export default config
