'use strict';

angular.module('admin').controller('AdminController', ['$scope', 'Authentication',
  function($scope, Authentication) {
    $scope.authentication = Authentication.auth;
    $scope.admin = Authentication.isAdmin();
  }
]);