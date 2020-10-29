module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: [
    '<rootDir>/tests/**/*.spec.(js|jsx|ts|tsx)|<rootDir>/**/__tests__/*.(js|jsx|ts|tsx)',
  ],
};
