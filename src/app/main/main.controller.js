'use strict';
/*jshint esnext: true */

import config from './config';
import BadgeService from './badge-service';

class MainController {
  constructor ($scope) {
    'ngInject';

    $scope.data = {
      repository: '',
      branch: 'master',
      style: 'default',
      services: []
    };

    $scope.services = config.map(service => new BadgeService(service, $scope.data));
    $scope.data.services = $scope.services.map(service => ({ service, selected: false }));

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

export default MainController;
