// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import compression from 'vite-plugin-compression';

// export default defineConfig({
//   plugins: [
//     react(),
//     compression({
//       algorithm: 'brotliCompress', // ✅ Use Brotli (better than gzip)
//       ext: '.br', // ✅ Ensure correct extension is generated
//       threshold: 1024, // ✅ Only compress files larger than 1KB
//     }),
//     compression({
//       algorithm: 'gzip', // ✅ Enable Gzip fallback
//       ext: '.gz',
//       threshold: 1024,
//     }),
//   ],
//   build: {
//     minify: 'terser', // ✅ Minify JS to reduce size
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             return 'vendor'; // ✅ Separate vendor files for better caching
//           }
//         },
//       },
//     },
//   },
// });

// serve -s dist


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