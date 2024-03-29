import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            out: './build',
            precompress: true,
            envPrefix: '',
        }),
        alias: {
            $server: './src/lib/server',
            $components: './src/lib/components',
            $utils: './src/lib/utils',
            $stores: './src/lib/stores',
            $types: './src/lib/types',
        },
    },
}

export default config
