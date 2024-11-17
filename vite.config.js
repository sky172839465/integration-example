import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import { version } from './package.json'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const isProd = mode === 'production'
  return defineConfig({
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss()]
      }
    },
    define: {
      'window.APP_BASENAME': '""',
      'window.VERSION': `"${version}"`,
      'window.IS_PROD': `${isProd}`
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setupTests.js'
    }
  })
}
