// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	vite: {
		resolve: {
			alias: {
				'@': new URL('./src', import.meta.url).pathname
			}
		}
	},
	integrations: [
		starlight({
			title: 'rcktbs tech',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/rocketbase-io/rcktbs-tech-docs' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', slug: 'guides/intro' },
						{ label: 'Folder Structure', slug: 'guides/folder-structure' },
					],
				},
			],
		}),
	],
});
