import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs ExB',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true
			  },
			social: {
				github: 'https://github.com/MaestroMiyagi/my-starlight-exb',
			},
			sidebar: [
				{
					label: 'Introducción',
					link:'/intro/',
				},
				{
					label: 'Inicio',
					autogenerate: { directory: 'start' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
