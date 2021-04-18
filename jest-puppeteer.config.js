module.exports = {
  server: {
    command: 'BROWSER=none npm start',
    port: 3000,
    launchTimeout: 10000,
    // debug: true,
  },
  launch: {
    dumpio: true,
    headless: false,
    product: 'chrome',
  },
  browserContext: 'default',
  setupFilesAfterEnv: ['__e2e__/setup.js'],
}
