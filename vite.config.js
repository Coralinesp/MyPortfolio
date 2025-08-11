import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MyPortfolio/',   // <-- base path para GitHub Pages
  build: {
    outDir: 'build'        // <-- carpeta de salida que usas (build)
  }
})
