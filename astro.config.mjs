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
					label: 'Recomendado',
					autogenerate: { directory: 'recomendado' }
				},
				{
					label: 'Ruta para aprender',
					items: [
						{ slug: 'ruta-para-aprender', label: 'General' },
						{ slug: 'ruta-para-aprender/html', label: 'HTML' },
						{ slug: 'ruta-para-aprender/css', label: 'CSS' },
						{ slug: 'ruta-para-aprender/js', label: 'JavaScript' },
						{ slug: 'ruta-para-aprender/astro', label: 'Astro' },
						{ slug: 'ruta-para-aprender/tailwind', label: 'TailwindCSS' },
						{ slug: 'ruta-para-aprender/preact', label: 'Preact' },
						{ slug: 'ruta-para-aprender/ts', label: 'TypeScript' },
					]
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
			customCss: [
				'./src/css/base.css'
			]
		}),
	],
});
