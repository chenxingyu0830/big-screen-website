module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				background: "url('src/images/background.png')",
			},
			color: {
        'regal-blue': '#243c5a',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
