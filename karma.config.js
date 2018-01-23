const path = require('path')
const webpackConfig = require('./webpack.karma')

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: ['src/**/*.test.js'],

    reporters: ['mocha'],

    client: {
      mocha: {
        ui: 'tdd'
      }
    },
    exclude: [],

    preprocessors: {
      'src/**/*.test.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    reporters: ['progress', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['text', 'html', 'lcovonly'],

      dir: path.join(__dirname, 'coverage'),

      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          subdir: 'html'
        }
      }
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    concurrency: Infinity
  })
}
