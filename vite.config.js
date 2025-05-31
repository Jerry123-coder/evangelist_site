import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.heic', '**/*.HEIC'],
  server: {
    fs: {
      // Allow serving files from one level up from the package root
      allow: ['..'],
    },
  },
})
