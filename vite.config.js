import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class', // Enable class-based dark mode
  plugins: [ tailwindcss(), react()],
})
