/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  black: "#000",
		  white: "#fff",
		  gold: "#ffd647",
		  dimgray: {
			"100": "#656565",
			"200": "#606060",
		  },
		  gainsboro: "#d9d9d9",
		  mediumorchid: "#c93eb3",
		  violet: "#fe88eb",
		  goldenrod: {
			"100": "#ffdc5e",
			"200": "#ffd058",
		  },
		  cornflowerblue: {
			"100": "#5ab0ff",
			"200": "#6e97ff",
		  },
		  lightcoral: "#fb7d7d",
		  salmon: "#ff7777",
		  plum: "#d0acff",
		  gray: "rgba(50, 45, 45, 0)",
		  snow: "#fff9f9",
		  lightpink: "rgba(255, 170, 170, 0)",
		  whitesmoke: "rgba(235, 235, 235, 0)",
		},
		spacing: {},
		fontFamily: {
		  inter: "Inter",
		  "inria-sans": "'Inria Sans'",
		  italiana: "Italiana",
		  newsreader: "Newsreader",
		},
		borderRadius: {
		  "10xs": "3px",
		  xl: "20px",
		  mini: "15px",
		  lg: "18px",
		},
	  },
	  fontSize: {
		base: "16px",
		mini: "15px",
		xl: "20px",
		"29xl": "48px",
		"19xl": "38px",
		"10xl": "29px",
		"13xl": "32px",
		"7xl": "26px",
		lgi: "19px",
		"45xl": "64px",
		"32xl": "51px",
		"5xl": "24px",
		inherit: "inherit",
	  },
	  screens: {
		mq1050: {
		  raw: "screen and (max-width: 1050px)",
		},
		mq1000: {
		  raw: "screen and (max-width: 1000px)",
		},
		mq725: {
		  raw: "screen and (max-width: 725px)",
		},
		mq450: {
		  raw: "screen and (max-width: 450px)",
		},
	  },
	},
	corePlugins: {
	  preflight: false,
	},
  }