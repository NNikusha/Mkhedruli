import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './common/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        mainPageOnebg : "url('/images/mainPhoto.png')",
        mainPageThreebg : "url('/images/background.svg')",
        dancersPiramid:"url('/images/dancersPiramid.png')",
        historyPhoto :"url('/images/historyPhoto.png')",
        mkhedruliDancers :"url('/images/mkhedruliDancers.png')",
        musicians:"url('/images/musicians.png')"

      },
      screens: {
        '3xl': '1600px', 
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}
export default config


