import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/project-promo-b-module-3-team-3/",
  server:{
    watch:{
      usePolling: true,
    },
    open:true,
  },
})
