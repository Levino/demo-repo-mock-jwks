module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__utils.ts'
  ],
  setupFiles: [
    "dotenv/config"
  ]
};