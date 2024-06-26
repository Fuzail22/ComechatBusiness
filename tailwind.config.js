/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// colors: {
			// 	'custom-blue': '#FAFAFF'
			// }
			colors: {
				textc1: {
					DEFAULT: 'rgba(250, 250, 255, 1)',
					50: 'rgba(250, 250, 255, 0.5)',
					75: 'rgba(250, 250, 255, 0.75)',
					80: 'rgba(250, 250, 255, 0.8)',
					85: 'rgba(250, 250, 255, 0.85)',
					90: 'rgba(250, 250, 255, 0.9)',
					95: 'rgba(250, 250, 255, 0.95)',
					100: 'rgba(250, 250, 255, 1)'
				},
				textc2: 'rgba(255, 127, 62, 1)',
				textc3: 'rgba(104, 82, 214, 1)',
				textc4: {
					DEFAULT: 'rgba(20, 19, 29, 1)',
					50: 'rgba(20, 19, 29, 0.5)',
					75: 'rgba(20, 19, 29, 0.75)',
					80: 'rgba(20, 19, 29, 0.8)',
					85: 'rgba(20, 19, 29, 0.85)',
					90: 'rgba(20, 19, 29, 0.9)',
					95: 'rgba(20, 19, 29, 0.95)',
					100: 'rgba(20, 19, 29, 1)'
				},
				buttonc1: {
					DEFAULT: 'rgba(104, 82, 214, 1)',
					50: 'rgba(104, 82, 214, 0.5)',
					75: 'rgba(104, 82, 214, 0.75)',
					80: 'rgba(104, 82, 214, 0.8)',
					85: 'rgba(104, 82, 214, 0.85)',
					90: 'rgba(104, 82, 214, 0.9)',
					95: 'rgba(104, 82, 214, 0.95)',
					100: 'rgba(104, 82, 214, 1)'
				},

				bgc1: 'rgba(250, 250, 255, 1)',
				bgc2: 'rgba(10, 9, 20, 1)',

				cardbgc1: 'rgba(20, 19, 29, 0.02)',
				cardborderc1: 'rgba(20, 19, 29, 0.04)'
			}
		}
	},
	plugins: []
};
