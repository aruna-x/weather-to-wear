import path from "node:path";
import process from "node:process";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: "/",
  },
  root: 'public',
  resolve: {
    alias: { "/src": path.resolve(process.cwd(), "src") }
  },
})
