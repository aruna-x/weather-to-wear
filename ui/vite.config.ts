import path from "node:path";
import process from "node:process";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: "index.html",
  },
  root: 'public',
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        app: './public/index.html',
      }
    }
  },
  resolve: {
    alias: { "/src": path.resolve(process.cwd(), "src") }
  },
  // build: {
  //   rollupOptions: {
  //     input: {
  //       app: './public/index.html',
})
