import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './test/setup.js',
    },
    resolve: {
        alias: {
            '@' : resolve(__dirname, 'src')
        }
    }
})
