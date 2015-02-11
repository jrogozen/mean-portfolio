'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus',
	function($scope, $state, Authentication, Menus) {
		$scope.authentication = Authentication.auth;

		function checkHome() {
      console.log($state.includes('home'));
      if($state.includes('home')) {
        $scope.home = true;
      }
    }

	}
]);