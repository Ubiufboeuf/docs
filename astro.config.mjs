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
					label: 'Aprendizaje',
					autogenerate: { directory: 'aprender' }
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
