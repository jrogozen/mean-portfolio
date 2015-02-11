'use strict';

angular.module('categories').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.
    state('categories', {
      abstract: true,
      url: '/categories',
      templateUrl: 'modules/core/views/wrapper.client.view.html'
    }).
    state('categories.list', {
      url: '',
      templateUrl: 'modules/categories/views/list-categories.client.view.html'
    });
  }
]);