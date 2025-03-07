import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dsv from '@rollup/plugin-dsv'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dsv()
  ],
  root: './frontend',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
})
