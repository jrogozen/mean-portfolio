'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'About',
	function($scope, Authentication, About) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

    $scope.blocks = About.blocks;
	}
]);