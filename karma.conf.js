// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
//
var PHASE = process.env.npm_config_phase === undefined ? 'local' : process.env.npm_config_phase
var configFile = 'src/module/config/' + PHASE + '.config.js'

module.exports = function karmaConfig (config) {
  var preprocessors = {
    'src/tests.webpack.js': ['webpack', 'sourcemap']
  }
  preprocessors[configFile] = ['webpack', 'sourcemap']

  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'progress',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    files: [
      // Grab all files in the app folder that contain .spec.
      'src/tests.webpack.js',
      configFile
    ],

    preprocessors: preprocessors,

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },

    webpack: require('./webpack.config'),

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  });
};
