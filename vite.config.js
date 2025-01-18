import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer(),
  ],
  base:'/dev-site/',
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1000 kB
  },
});