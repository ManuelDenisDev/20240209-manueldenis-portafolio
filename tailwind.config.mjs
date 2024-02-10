/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				intervariable: ['InterVariable', 'Inter']
			},
			fontFamily: {
				cascadiacode: ['Cascadia Code', 'sans-serif']
			},
			backgroundImage: {
				'bg-grid': "url('/img/bg-grid.png')"
			}
		}
	},
	plugins: []
}
