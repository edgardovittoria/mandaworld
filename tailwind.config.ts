import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#DB0B59',
        secondary: '#78E7FB',
        backgroundColor: '#03051A'
      },
      // fontFamily: {
      //   manda: ['var(--font-manda)'],
      //   inter: ['var(--font-inter)']
      // }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
