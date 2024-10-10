import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Ensures that asset paths are relative
  build: {
    outDir: 'dist',  // Output directory for the build files
  },
});
