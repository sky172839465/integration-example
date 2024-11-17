export default {
  transform: {
    '^.+\\.j(s|sx)?$': '@swc/jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/mocks/svg-mock.js'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx']
}
