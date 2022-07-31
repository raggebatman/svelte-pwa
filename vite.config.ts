import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const production: boolean = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  // expose the server when in development
  server: { 
    host: !production 
  },
  plugins: [ 
    svelte({
      emitCss: production,
      compilerOptions: {
        dev: !production
      }
    })
  ]
});
