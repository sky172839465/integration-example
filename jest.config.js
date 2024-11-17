export default {
  transform: {
    '^.+\\.j(s|sx)?$': '@swc/jest'
  },
  moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/mocks/svg-mock.js',
    '^react(.*)$': '<rootDir>/node_modules/react$1' 
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx']
}
