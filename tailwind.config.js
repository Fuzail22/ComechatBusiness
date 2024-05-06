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
				bgc2: 'rgba(10, 9, 20, 1)'
			}
		}
	},
	plugins: []
};
