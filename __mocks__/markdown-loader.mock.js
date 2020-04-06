// borrowed from https://github.com/keplersj/jest-raw-loader
module.exports = {
  process: (content) => 'module.exports = ' + JSON.stringify(content)
}
