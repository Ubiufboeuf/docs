// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'dw',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Ubiufboeuf/docs' }],
			sidebar: [
				{
					label: 'Aprender',
					autogenerate: { directory: 'aprender' }
				},
				{
					label: 'Glosario',
					autogenerate: { directory: 'glosario' }
				},
				{
					label: 'HTML',
					autogenerate: { directory: 'html' }
				},
				{
					label: 'CSS',
					autogenerate: { directory: 'css' }
				},
				{
					label: 'JavaScript',
					autogenerate: { directory: 'js' }
				},
			],
		}),
	],
});
