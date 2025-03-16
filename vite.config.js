/* eslint-disable import/no-unused-modules,import/no-extraneous-dependencies */
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import { configDefaults } from 'vitest/dist/config.js';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // Make sure this matches the Chromium version built into NW.js
    target: 'chrome132',
    outDir: 'dist-vue'
  },
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@@': fileURLToPath(new URL('./tests', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      exclude: [
        ...(configDefaults?.coverage?.exclude || []),
        '**/dist-vue/**',
        './server.cjs'
      ],
      reportsDirectory: './tests/unit/coverage'
    },
    root: '.',
    setupFiles: [
      './tests/unit/setup.js'
    ],
    snapshotSerializers: [
      './node_modules/vue3-snapshot-serializer/index.js'
    ]
  }
});
