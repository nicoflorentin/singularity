/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			textColor: {
				foreground: "rgb(88, 88, 88)",
				onPrimary: "rgb(0, 0, 0)",
				onSecondary: "rgb(255, 255, 255)",
				surface: "rgb(255, 255, 255)",
				onSurface: "rgb(0, 0, 0)",
				onBackground: "rgb(0, 0, 0)",
			},
			backgroundColor: {
				primary: "rgb(243, 244, 246)",
				secondary: {
					DEFAULT: "#4487FF",
					dark: "#4487FF",
					light: "#4487FF",
				},
			},
			borderColor: {
				primary: "rgb(199, 199, 199)",
				secondary: "rgb(226, 226, 226)",
			},
			boxShadow: {
				input: "5px 5px 5px -2px rgba(0, 0, 0, 0.15)",
			},
		},
	},
	plugins: [],
}
