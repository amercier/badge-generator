'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';

angular.module('badgeGenerator', ['ngAnimate', 'ngResource', 'ui.router', 'ngMaterial'])
  .controller('MainCtrl', MainCtrl)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
