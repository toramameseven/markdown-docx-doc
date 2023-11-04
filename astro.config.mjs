import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export const locales = {
	en: { label: 'English', lang: 'en' },
	ja: { label: '日本語', lang: 'ja' },
};

const site = 'https://toramameseven.github.io';

export default defineConfig({
	// build: {
	// 	// 例: ビルド時に`page/index.html`ではなく`page.html`を生成します。
	// 	format: 'file'
	// },
	redirects: {
		'/': {
			status: 302,
			destination: '/markdown-docx-doc/jp/start/setup/',
		},
	},
	trailingSlash: 'always',
	site,
	base: '/markdown-docx-doc',
	integrations: [
		starlight({
			title: 'markdown-docx',
			favicon: "./images/markdown2docx.png",
			customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
			locales,
			defaultLocale: "ja",
			social: {
				github: 'https://github.com/toramameseven/markdown-docx',
			},
			sidebar: [
				{
					label: 'Start Here',
					translations: {
						ja: 'ここからはじめる',
					},
					autogenerate: { directory: 'start' },
				}
				// {
				// 	label: 'Guide',
				// 	translations: {
				// 		ja: 'ガイド',
				// 	},
				// 	autogenerate: { directory: 'guide' },
				// },
			],
			lastUpdated: true,
		}),
	],
});
