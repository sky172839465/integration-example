import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { version } from './package.json'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    define: {
        'window.VERSION': `${JSON.stringify(version)}`
    },
    server: {
        port: 3000
    }
  })
}