// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	css: [
		'~/assets/css/main.css',
		'@fortawesome/fontawesome-svg-core/styles.css',
	],
	plugins: ['~/plugins/fontawesome.ts'],
	build: {
		transpile: [
			'@fortawesome/fontawesome-svg-core',
			'@fortawesome/free-brands-svg-icons',
			'@fortawesome/free-solid-svg-icons',
			'@fortawesome/vue-fontawesome',
		],
	},
});
