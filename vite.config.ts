// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // @ts-expect-error - Add the test environment here
  test: {
    globals: true,
    environment: 'jsdom', // Ensure jsdom is set here
    setupFiles: './src/setupTests.ts'
  }
})
