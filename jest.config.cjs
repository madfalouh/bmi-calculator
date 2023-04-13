/* eslint-disable quotes */
module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
}
