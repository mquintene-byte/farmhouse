import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Only enable the nitro SSR plugin when explicitly requested. This avoids
    // Vite attempting an SSR build with an HTML entry by default.
    // Set ENABLE_NITRO=true in the environment to enable it.
    ...(process.env.ENABLE_NITRO === 'true' ? [nitroV2Plugin()] : []),
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
