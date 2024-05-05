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
					DEFAULT: '#FAFAFF',
					50: '#FAFAFF80', // 50% opacity
					75: '#FAFAFFBF', // 75% opacity
					80: '#FAFAFFCC', // 80% opacity
					85: '#FAFAFFD9', // 85% opacity
					90: '#FAFAFFE6', // 90% opacity
					95: '#FAFAFFF2', // 95% opacity
					100: '#FAFAFF' // 100% opacity
				},
				buttonc1: {
					DEFAULT: '#6852D6',
					50: '#6852D680', // 50% opacity
					75: '#6852D6BF', // 75% opacity
					80: '#6852D6CC', // 80% opacity
					85: '#6852D6D9', // 85% opacity
					90: '#6852D6E6', // 90% opacity
					95: '#6852D6F2', // 95% opacity
					100: '#6852D6' // 100% opacity
				},
				bgc1: '#0A0914'
			}
		}
	},
	plugins: []
};
