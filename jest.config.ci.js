const base = require('./jest.config');
module.exports = Object.assign({}, base, {
  reporters: ["jest-junit"],
  collectCoverage: true, // 是否收集测试覆盖率。
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"], //测试lib文件夹下所有文件ts,tsx结尾。不测试node_modules里文件。
  coverageDirectory: 'coverage', // 生成的代码放到coverage目录下
  coverageReporters: ['text', 'lcov'],
});