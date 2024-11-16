/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FB5D43",
				secondary: "#4487FF",
			},
			textColor: {
				foreground: "rgb(88, 88, 88)",
				onPrimary: "rgb(247, 247, 247)",
				onSecondary: "rgb(255, 255, 255)",
				surface: "rgb(255, 255, 255)",
				onSurface: "rgb(139, 139, 139)",
				onBackground: "#A4AFB7",
			},
			backgroundColor: {
				primary: "rgb(250, 253, 255)",
				surface: "rgb(249, 250, 255)",
				secondary: {
					DEFAULT: "#4487FF",
					dark: "#386dc9",
					light: "#4487FF",
				},
				orange: "#FB5D43",
			},
			boxShadow: {
				input: "5px 5px 5px -2px rgba(0, 0, 0, 0.20)",
				bigButton: "0px 8px 10px -2px rgba(68, 135, 255, 0.40)",
				surface: "0px 0px 11px 4px rgba(0,0,0,0.1)",
			},
		},
	},
	plugins: [],
}
