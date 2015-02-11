'use strict';

angular.module('admin').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.
    state('admin', {
      abstract: true,
      url: '/admin',
      templateUrl: 'modules/admin/views/admin-wrapper.client.view.html'
    }).
    state('admin.articles-list', {
      url: '',
      templateUrl: 'modules/admin/views/admin-list-articles.client.view.html'
    }).
    state('admin.articles-create', {
      url: '',
      templateUrl: 'modules/admin/views/admin-create-article.client.view.html'
    }).
    state('admin.articles-edit', {
      url: '',
      templateUrl: 'modules/admin/views/admin-edit-article.client.view.html'
    }).
    state('admin.categories-list', {
      url: '/categories',
      templateUrl: 'modules/admin/views/admin-list-categories.client.view.html'
    }).
    state('admin.categories-create', {
      url: '/categories/create',
      templateUrl: 'modules/admin/views/admin-create-category.client.view.html'
    }).
    state('admin.categories-edit', {
      url: '/categories/:categoryId',
      templateUrl: 'modules/admin/views/admin-edit-category.client.view.html'
    });
  }
]);