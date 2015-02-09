'use strict';

angular.module('portfolio').directive('jrWebsitesList', function() {
  return {
    restrict: 'A',
    scope: {
    },
    templateUrl: '/modules/websites/views/websites.client.view.html',
    controller: ['$scope', 'Websites', function($scope, Portfolio) {
      $scope.getPortfolio = function() {
        $scope.portfolio = Portfolio.get;
      };

      $scope.setFocus = function(site) {
        $scope.site = site;
        $scope.mode = 'single';
      };

      $scope.viewList = function() {
        $scope.mode = 'list';
      };

      $scope.mode = 'list';
    }],
    link: function(scope, element, attrs) {
      scope.getPortfolio();
    }
  };
});