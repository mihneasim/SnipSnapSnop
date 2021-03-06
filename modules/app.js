angular.module('snipApp', [
    'ui.router', 'ui.bootstrap', 'angular-lodash', 'firebase',
    'snipDirectives', 'snipFilters'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  'use strict';

  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html'
  })
  .state('list', {
    url: '/list',
    templateUrl: 'views/list.html',
    controller: 'SnipsController'
  })
  .state('create', {
    url: '/create',
    templateUrl: 'views/create.html',
    controller: 'SnipsController'
  })
  .state('detail', {
    url: '/detail/{snippetId:.+}',
    templateUrl: 'views/detail.html',
    controller: 'SnipsController'
  })

  .state('404', {
    url: '/404',
    templateUrl: 'views/404.html'
  });

  $locationProvider.html5Mode(true);

});
