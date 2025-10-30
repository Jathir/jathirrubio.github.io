import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jathirrubio.github.io/',
  plugins: [react()],
  build: {
    outDir: '../docs',
    emptyOutDir: true
  }
})
