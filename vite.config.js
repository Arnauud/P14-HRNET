import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress', 
      ext: '.br',
      threshold: 1024,
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
  ],
  build: {
    minify: mode === 'production' ? 'terser' : false,  // ✅ Minify only in production
    sourcemap: false, // ✅ Disable sourcemaps for smaller JS
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
  server: {
    compress: true, // ✅ Enable compression in development
  },
}));

// npm run dev
// serve -s dist