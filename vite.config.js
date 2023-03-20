import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [VitePWA(
		{
            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
            },
            registerType: "autoUpdate",
            manifest: {
                "background_color": "#ffffff",
                "theme_color": "#7E1F86",
                "name": "Unixfy.net",
                "short_name": "Unixfy.net",
                "start_url": "/",
                "display": "standalone",
                "icons": [
                    {
                        "src": "/images/largeicon.png",
                        "sizes": "1000x1000",
                        "type": "image/png",
                        "purpose": "maskable any"
                    }
                ]
            }
        }
	)
	,	sveltekit()
	]
});
