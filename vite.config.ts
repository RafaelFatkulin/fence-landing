import { defineConfig, splitVendorChunkPlugin } from 'vite'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [
    splitVendorChunkPlugin(),
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: [
        'resources/css/app.css',
        'resources/js/client/app.js',
        'resources/js/admin/app.js',
        'resources/images/hero.webp',
      ],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],
})
