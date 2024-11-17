import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

import { version } from './package.json'

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      react(),
      svgr({ svgrOptions: { icon: true } })
    ],
    define: {
      'window.VERSION': `${JSON.stringify(version)}`
    },
    server: {
      port: 3000
    }
  })
}