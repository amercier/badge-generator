'use strict';

var path = require('path');
var conf = require('./gulp/conf');

var _ = require('lodash');
var wiredep = require('wiredep');

var isContinuousIntegration = process.env.CI === 'true';

function listFiles() {
  var wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  return wiredep(wiredepOptions).js
    .concat([
      path.join(conf.paths.tmp, '/serve/app/index.module.js'),
      path.join(conf.paths.src, '/**/*.spec.js'),
      path.join(conf.paths.src, '/**/*.mock.js'),
      path.join(conf.paths.src, '/**/*.html')
    ]);
}

module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    singleRun: isContinuousIntegration,
    autoWatch: !isContinuousIntegration,

    files: listFiles(),

    // Preprocessors
    preprocessors: {
      '.tmp/serve/app/index.module.js': isContinuousIntegration ? ['coverage'] : [],
      'src/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'badgeGenerator'
    },

    // Reporters
    reporters: process.env.CI ? ['coverage', 'dots'] : ['progress'],
    coverageReporter: !isContinuousIntegration ? {} : {
      reporters: [
        { subdir: '.', type: 'html' },
        { subdir: '.', type: 'lcovonly' },
        { type: 'text-summary' }
      ]
    },

    // Browsers
    browsers : ['PhantomJS', 'Firefox', isContinuousIntegration ? 'chrome-travis-ci' : 'Chrome'],
    customLaunchers: {
      'PhantomJS_debug': {
        base: 'PhantomJS',
        options: {
          windowName: 'Custom PhantomJS',
          settings: {
            webSecurityEnabled: false
          }
        },
        flags: [
          '--remote-debugger-port=9000',
          '--remote-debugger-autorun=yes'
        ]
      },
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  });
};
