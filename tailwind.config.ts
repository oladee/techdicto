import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grey  : {
          200 : '#E4E7EC',
          300 : '#B5B5B5',
          800 : '#1D2739'
        },
        white : {
          100 : '#F7F8F8'
        }
      },
      fontFamily : {
        dmsans : ["DM Sans", 'sans-serif']
      }
    }, 
  },
  plugins: [],
};
export default config;
