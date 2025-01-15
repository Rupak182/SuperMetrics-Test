/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gray900': '#121B26',
				'gray700': '#42526B',
				'gray600': '#697586',
				'gray800': '#212F40',
				'gray100': '#E3E8EF',
				'gray200': '#CFD5DE',
				'gray300': '#B4BBC5',
				'gray500': '#838E9E',
				'blue500': '#1B91F0',
				'blue200': '#E0EEFE',
				'orange500': '#F6B51E',
				'orange200': '#FFEFCC',
				'red500': '#E54545',
				'red400': '#F17878',
				'red200': '#FDE3E3',
				'purple500': '#7F56D9',
				'purple200': '#EDE6FF',

			  },

			  boxShadow: {
				'blue100': '0px 4px 9px #BAE0FF',
				'white100': '0px 4px 9px rgba(16,24,40,0.1)',
				'white200': '-4px -10px 4px #E9ECF0',
				'custom-color': '5px 5px 20px rgba(34, 60, 80, 0.7)',
			  },

			  fontFamily: {
                geist: ['Geist Variable', 'sans-serif'],
				geist_mono:[ "Geist Mono Variable", "monospace"],
				roboto:['Roboto', 'sans-serif'],
            },
		},
	},
	plugins: [],
}
