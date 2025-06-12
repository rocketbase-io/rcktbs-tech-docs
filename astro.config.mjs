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
						{ label: 'Intro', slug: 'guides/intro' },
						{ label: 'Folder Structure', slug: 'guides/folder-structure' },
						{
							label: 'Apps',
							items: [
								{ label: 'Server', slug: 'guides/apps/server' },
								{ label: 'Web', slug: 'guides/apps/web' },
							],
						},
						{
							label: 'Packages',
							items: [
								{ label: 'API', slug: 'guides/packages/api' },
								{ label: 'Drizzle', slug: 'guides/packages/drizzle' },
							],
						},
					],
				},
				{
					label: 'Infrastruktur',
					items: [
						{ label: 'dokku', slug: 'infra/dokku' },
						{ label: 'tolgee', slug: 'infra/tolgee' },
					],
				},
			],
		}),
	],
});
