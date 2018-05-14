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

    // Browsers
    browsers: isContinuousIntegration ? ['PhantomJS', 'ChromeHeadlessNoSandbox', 'FirefoxHeadless'] : ['PhantomJSDebug'],
    customLaunchers: {
      PhantomJSDebug: {
        base: 'PhantomJS',
        debug: true
      },
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },

    // Reporters
    reporters: process.env.CI ? ['coverage', 'dots'] : ['progress'],
    coverageReporter: {
      reporters: [
        { type: 'json' },
        { type: 'html' }
      ]
    }
  });
};
