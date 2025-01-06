const setupFiles = [];

const isJestTestRunner =
  process.argv.length >= 2 && process.argv[1].endsWith('jest.js') === true;

if (isJestTestRunner) {
  console.log('Jest test runner detected');
  setupFiles.push('<rootDir>/setup-jest.ts');
} else {
  console.log('Angular test runner detected');
}

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: setupFiles,
  detectOpenHandles: true,
};
