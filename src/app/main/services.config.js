export default [
  {
    name: 'GitHub forks',
    url: 'https://github.com/{repository}',
    imageUrl: 'https://img.shields.io/github/forks/{repository}.svg',
    title: 'Build Status'
  },
  {
    name: 'GitHub stars',
    url: 'https://github.com/{repository}',
    imageUrl: 'https://img.shields.io/github/stars/{repository}.svg',
    title: 'Build Status'
  },
  {
    name: 'GitHub license',
    url: 'https://github.com/{repository}',
    imageUrl: 'https://img.shields.io/github/license/{repository}.svg',
    title: 'License'
  },
  {
    name: 'Travis CI',
    url: 'https://travis-ci.org/{repository}',
    imageUrl: 'https://img.shields.io/travis/{repository}/{branch}.svg',
    title: 'Build Status'
  },
  {
    name: 'CircleCI',
    url: 'https://circleci.com/gh/{repository}',
    imageUrl: 'https://img.shields.io/circleci/project/{repository}/{branch}.svg',
    title: 'Build Status'
  },
  {
    name: 'CodeShip',
    url: 'https://codeship.com/projects/{repository}',
    imageUrl: 'https://circleci.com/gh/{repository}.svg?style=svg',
    title: 'Build Status'
  },
  {
    name: 'Code Climate (maintainability)',
    url: 'https://codeclimate.com/github/{repository}',
    imageUrl: 'https://img.shields.io/codeclimate/maintainability/{repository}.svg',
    title: 'Maintainability'
  },
  {
    name: 'Code Climate (% maintainability)',
    url: 'https://codeclimate.com/github/{repository}',
    imageUrl: 'https://img.shields.io/codeclimate/maintainability-percentage/{repository}.svg',
    title: 'Maintainability'
  },
  {
    name: 'Code Climate (tech debt)',
    url: 'https://codeclimate.com/github/{repository}',
    imageUrl: 'https://img.shields.io/codeclimate/tech-debt/{repository}.svg',
    title: 'Technical Debt'
  },
  {
    name: 'Code Climate (code coverage)',
    url: 'https://codeclimate.com/github/{repository}',
    imageUrl: 'https://img.shields.io/codeclimate/coverage/github/{repository}.svg',
    title: 'Test Coverage'
  },
  {
    name: 'Coveralls',
    url: 'https://coveralls.io/r/{repository}?branch={branch}',
    imageUrl: 'http://img.shields.io/coveralls/{repository}/{branch}.svg',
    title: 'Test Coverage'
  },
  {
    name: 'Codecov',
    url: 'https://codecov.io/github/{repository}?branch={branch}',
    imageUrl: 'https://img.shields.io/codecov/c/github/{repository}/{branch}.svg',
    title: 'Test Coverage'
  },
  {
    name: 'Gemnasium',
    url: 'https://gemnasium.com/{repository}',
    imageUrl: 'http://img.shields.io/gemnasium/{repository}.svg',
    title: 'Dependency Status'
  },
  {
    name: 'VersionEye',
    url: 'https://www.versioneye.com/user/projects/{repository}',
    imageUrl: 'https://www.versioneye.com/user/projects/{repository}/badge.svg',
    title: 'Dependency Status'
  },
  {
    name: 'David DM',
    url: 'https://david-dm.org/{repository}',
    imageUrl: 'https://img.shields.io/david/{repository}.svg',
    title: 'Dependency Status'
  },
  {
    name: 'David DM (dev)',
    url: 'https://david-dm.org/{repository}#info=devDependencies',
    imageUrl: 'https://img.shields.io/david/dev/{repository}.svg',
    title: 'devDependency Status'
  },
  {
    name: 'David DM (peer)',
    url: 'https://david-dm.org/{repository}#info=devDependencies',
    imageUrl: 'https://img.shields.io/david/peer/{repository}.svg',
    title: 'peerDependency Status'
  },
  {
    name: 'Packagist',
    url: 'https://packagist.org/packages/{repository}',
    imageUrl: 'https://img.shields.io/packagist/v/{repository}.svg',
    title: 'Latest Stable Version'
  },
  {
    name: 'Packagist PHP version',
    url: 'https://packagist.org/packages/{repository}',
    imageUrl: 'https://img.shields.io/packagist/php-v/{repository}.svg',
    title: 'PHP version'
  },
  {
    name: 'Packagist License',
    url: 'https://packagist.org/packages/{repository}',
    imageUrl: 'https://img.shields.io/packagist/l/{repository}.svg',
    title: 'License'
  },
  {
    name: 'NPM',
    url: 'https://www.npmjs.com/package/{repository}',
    imageUrl: 'https://img.shields.io/npm/v/{repository}.svg',
    title: 'Latest Stable Version'
  },
  {
    name: 'NPM License',
    url: 'https://www.npmjs.com/package/{repository}',
    imageUrl: 'https://img.shields.io/npm/l/{repository}.svg',
    title: 'License'
  },
  {
    name: 'NPM Total Downloads',
    url: 'https://www.npmjs.com/package/{repository}',
    imageUrl: 'https://img.shields.io/npm/dt/{repository}.svg',
    title: 'NPM Downloads'
  },
  {
    name: 'NPM Downloads per month',
    url: 'https://www.npmjs.com/package/{repository}',
    imageUrl: 'https://img.shields.io/npm/dm/{repository}.svg',
    title: 'NPM Downloads'
  },
  {
    name: 'Bower',
    url: 'http://bower.io/search/?q={repository}',
    imageUrl: 'https://img.shields.io/bower/v/{repository}.svg',
    title: 'Latest Stable Version'
  },
  {
    name: 'ESDoc',
    url: 'https://doc.esdoc.org/github.com/{repository}/',
    imageUrl: 'https://doc.esdoc.org/github.com/{repository}/badge.svg',
    title: 'API Documentation'
  },
  {
    name: 'Greenkeeper',
    url: 'https://github.com/{repository}/issues?q=label%3Agreenkeeper',
    imageUrl: 'https://badges.greenkeeper.io/{repository}.svg',
    title: 'Greenkeeper'
  },
  {
    name: 'Melpa',
    url: 'http://melpa.org/#/{repository}/',
    imageUrl: 'http://melpa.org/packages/{repository}-badge.svg',
    title: 'MELPA'
  }
];
