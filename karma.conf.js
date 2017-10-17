const webpackConfig = require('./config/webpack/test.js')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      'karma-jquery',
      'karma-jasmine-jquery',
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
    ],
    files: [ './spec/javascript/**/*.spec.js' ],
    exclude: [],
    webpack: webpackConfig,
    preprocessors: {'./spec/javascript/**/*.spec.js' : ['webpack']},
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
