import path from "node:path";
import process from "node:process";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: "/",
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  root: 'public',
  resolve: {
    alias: { "/src": path.resolve(process.cwd(), "src") }
  },
})
