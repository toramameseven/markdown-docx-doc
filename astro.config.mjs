import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import partytown from '@astrojs/partytown';

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
		partytown({
			// Adds dataLayer.push as a forwarding-event.
			config: {
				forward: ["dataLayer.push"],
			},
		}),
		starlight({
			title: 'markdown-docx',
			favicon: "./images/markdown2docx.png",
			customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
			locales,
			defaultLocale: "ja",
			components: {
				// Override the default `SocialIcons` component.
				Head: './src/components/MyHead.astro',
			},
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
				},
				{
					label: 'Basic',
					translations: {
						ja: '基本',
					},
					autogenerate: { directory: 'basic' },
				},
				{
					label: 'Demo',
					translations: {
						ja: 'デモ',
					},
					autogenerate: { directory: 'demos' },
				}
			],
			// lastUpdated: true,
		}),
	],
});
