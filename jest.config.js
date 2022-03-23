const { compilerOptions } = require('./tsconfig.json')

const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest'
};
