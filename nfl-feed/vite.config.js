
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/.redirects', // ✅ or use '.redirects' if renamed
          dest: '.', // copies to dist/
          rename: '_redirects' // forces the correct name in case of issues
        }
      ]
    })
  ],
  publicDir: 'public'
});

