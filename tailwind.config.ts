import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#416681",
				},
				secondary: {
					DEFAULT: "#2d3e4d",
				},
				background: {
					DEFAULT: '#1e2933',
				},
			},
			backgroundImage: {
				'back-metrics': "url('/backmetrics.webp')",
				'back-category': "url('/backcategory.webp')",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
