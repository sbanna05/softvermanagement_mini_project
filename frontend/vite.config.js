/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',       // React komponensekhez böngésző-szerű környezet
    setupFiles: './src/setupTests.js', // ide pakolhatod a jest-dom-ot, MSW-t stb.
    css: true,
    coverage: {
      provider: "c8", // lehet "istanbul" is
      reporter: ["text", "html"], // konzol + HTML riport
      lines: 80,
      functions: 80,
    }
  }
})
