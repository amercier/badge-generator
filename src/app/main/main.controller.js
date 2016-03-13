import { servicesConfig } from './services.config';
import { formatsConfig } from './formats.config';
import { BadgeService } from './badge-service';

export class MainController {
  constructor ($scope) {
    'ngInject';

    $scope.data = {
      repository: '',
      branch: 'master',
      style: 'default',
      services: []
    };

    $scope.services = servicesConfig.map(service => new BadgeService(service, $scope.data));
    $scope.data.services = $scope.services.map(service => ({ service, selected: false }));

    $scope.formats = formatsConfig;
    $scope.data.format = $scope.formats.filter(f => f.default)[0];

    $scope.getSelectedServices = function() {
      return $scope.data.services
        .filter(function(s) { return s.selected; })
        .map(function(s) { return s.service; });
    };

    $scope.getSource = function() {
      return $scope.getSelectedServices()
        .map(service => $scope.data.format.template(
          service.title,
          service.getUrl(),
          service.getImageUrl($scope.data.style)
        ))
        .join('\n') + '\n\n';
    };
  }
}
