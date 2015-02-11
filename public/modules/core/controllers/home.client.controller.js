'use strict';


angular.module('core').controller('HomeController', ['$scope', '$state', 'Authentication', 'About',
	function($scope, $state, Authentication, About) {
		// This provides Authentication context.
		$scope.authentication = Authentication.auth;

    $scope.blocks = About.blocks;
	}
]);