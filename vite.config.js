import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vite.dev/config/
    export default defineConfig({
        base: "",
        plugins: [svelte()], 
        build: {
            rollupOptions: {
                input: {
                    main: 'index.html',
                    finder: 'finder/index.html',
                },
            },
        }
    })
