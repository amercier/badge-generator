'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($scope) {

    function BadgeService(config) {
      this.name = config.name;
      this.url = config.url;
      this.imageUrl = config.imageUrl;
      this.title = config.title;
    }

    BadgeService.parseTemplate = function(template) {
      return template
        .replace('{repository}', $scope.data.repository)
        .replace('{branch}', $scope.data.branch);
    };

    BadgeService.parseUrl = function(url, noCache) {
      var parsed = BadgeService.parseTemplate(url);
      if (noCache) {
        parsed += (url.indexOf('?') === -1 ? '?' : '&') + Math.floor(new Date().getTime() / 1000);
      }
      return parsed;
    };

    BadgeService.prototype.getUrl = function(noCache) {
      return BadgeService.parseUrl(this.url, noCache);
    };

    BadgeService.prototype.getImageUrl = function(style, noCache) {
      return BadgeService.parseUrl(this.imageUrl + (style === 'default' ? '' : '?style=' + style), noCache);
    };

    BadgeService.prototype.getMarkDown = function(style) {
      return '[![' + this.title + '](' + this.getImageUrl(style) + ')](' + this.getUrl() + ')';
    };

    $scope.services = [
      new BadgeService({
        name: 'Travis CI',
        url: 'https://travis-ci.org/{repository}',
        imageUrl: 'https://img.shields.io/travis/{repository}/{branch}.svg',
        title: 'Build Status'
      }),
      new BadgeService({
        name: 'CodeShip',
        url: 'https://codeship.com/projects/{repository}',
        imageUrl: 'https://img.shields.io/codeship/{repository}/{branch}.svg',
        title: 'Build Status'
      }),
      new BadgeService({
        name: 'Code Climate',
        url: 'https://codeclimate.com/github/{repository}',
        imageUrl: 'https://img.shields.io/codeclimate/github/{repository}.svg',
        title: 'Code Climate'
      }),
      new BadgeService({
        name: 'Code Climate (code coverage)',
        url: 'https://codeclimate.com/github/{repository}',
        imageUrl: 'https://img.shields.io/codeclimate/coverage/github/{repository}.svg',
        title: 'Test Coverage'
      }),
      new BadgeService({
        name: 'Coveralls',
        url: 'https://coveralls.io/r/{repository}?branch={branch}',
        imageUrl: 'http://img.shields.io/coveralls/{repository}/{branch}.svg',
        title: 'Test Coverage'
      }),
      new BadgeService({
        name: 'Gemnasium',
        url: 'https://gemnasium.com/{repository}',
        imageUrl: 'http://img.shields.io/gemnasium/{repository}.svg',
        title: 'Dependency Status'
      }),
      new BadgeService({
        name: 'VersionEye',
        url: 'https://www.versioneye.com/user/projects/{repository}',
        imageUrl: 'https://www.versioneye.com/user/projects/{repository}/badge.svg',
        title: 'Dependency Status'
      }),
      new BadgeService({
        name: 'David DM',
        url: 'https://david-dm.org/{repository}',
        imageUrl: 'https://img.shields.io/david/{repository}.svg',
        title: 'Dependency Status'
      }),
      new BadgeService({
        name: 'David DM (dev)',
        url: 'https://david-dm.org/{repository}#info=devDependencies',
        imageUrl: 'https://img.shields.io/david/dev/{repository}.svg',
        title: 'devDependency Status'
      }),
      new BadgeService({
        name: 'David DM (peer)',
        url: 'https://david-dm.org/{repository}#info=devDependencies',
        imageUrl: 'https://img.shields.io/david/peer/{repository}.svg',
        title: 'peerDependency Status'
      }),
      new BadgeService({
        name: 'Packagist',
        url: 'https://gemnasium.com/{repository}',
        imageUrl: 'https://img.shields.io/packagist/v/{repository}.svg',
        title: 'Latest Stable Version'
      }),
      new BadgeService({
        name: 'NPM',
        url: 'https://www.npmjs.com/package/{repository}',
        imageUrl: 'https://img.shields.io/npm/v/{repository}.svg',
        title: 'Latest Stable Version'
      }),
      new BadgeService({
        name: 'NPM Downloads',
        url: 'https://www.npmjs.com/package/{repository}',
        imageUrl: 'https://img.shields.io/npm/dm/{repository}.svg',
        title: 'NPM Downloads'
      }),
      new BadgeService({
        name: 'Bower',
        url: 'http://bower.io/search/?q={repository}',
        imageUrl: 'https://img.shields.io/bower/v/{repository}.svg',
        title: 'Latest Stable Version'
      })
    ];

    $scope.data = {
      repository: '',
      branch: 'master',
      style: 'default',
      services: $scope.services.map(function(service) {
        return {
          service: service,
          selected: false
        };
      })
    };

    $scope.getSelectedServices = function() {
      return $scope.data.services
        .filter(function(s) { return s.selected; })
        .map(function(s) { return s.service; });
    };

    $scope.getMarkDown = function() {
      return $scope.getSelectedServices()
        .map(function(s) { return s.getMarkDown($scope.data.style); })
        .join('\n') + '\n\n';
    };
  }
}

MainCtrl.$inject = ['$scope'];

export default MainCtrl;
