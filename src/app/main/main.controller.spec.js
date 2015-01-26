'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('badgeGenerator'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 10 services', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('MainCtrl', {
      $scope: scope
    });

    expect(angular.isArray(scope.services)).toBeTruthy();
    expect(scope.services.length > 5).toBeTruthy();
  }));
});
