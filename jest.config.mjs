// jest.config.mjs
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './',
  })
  const config = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coverageReporters: ["text","html"],
  coverageDirectory: "<rootDir>/coverage/"
}

export default createJestConfig(config)