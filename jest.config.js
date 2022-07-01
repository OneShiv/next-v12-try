module.exports = {
  testRegex: "/__tests__/.*\\.(test|spec)\\.js?$",
  setupFilesAfterEnv: ["./setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transformIgnorePatterns: ["/node_modules/"],
  testEnvironment: "jest-environment-jsdom",
};
