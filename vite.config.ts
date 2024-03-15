import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  build: {
    manifest: true,
    assetsDir: 'resources/images/',
  },
  plugins: [
    // splitVendorChunkPlugin(),
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: [
        'resources/css/app.css',
        'resources/js/app.js',
        'resources/js/client/app.js',
        'resources/js/admin/app.js',
      ],

      assetsUrl: '/assets/',

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],
})
