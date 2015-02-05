'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			abstract: true,
			templateUrl: 'modules/core/views/home.client.view.html'
		}).
		state('home.main', {
			url: '',
			views: {
				'about': {
					templateUrl: 'modules/core/views/home.about.client.view.html'
				},
				'connect': {
					templateUrl: 'modules/core/views/home.connect.client.view.html'
				}
			}
		})
		;
	}
]);