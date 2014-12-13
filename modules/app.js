angular.module('snipApp', [
    'ngResource', 'ui.router', 'ui.bootstrap', 'angular-lodash'
]).config(function ($stateProvider, $urlRouterProvider) {
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
    controller: function($scope) {
      $scope.snippets = [{'id': '1', 'name': '1', 'description': 'some desc', 'code': 'echo "hello"', 'author': 'John Doe'}];
    }
  })
  .state('create', {
    url: '/create',
    templateUrl: 'views/create.html',
    controller: function($scope) {
    }
  })
  .state('detail', {
    url: '/detail/{snippetId:[0-9]+}',
    templateUrl: 'views/detail.html',
    controller: function($scope) {
      $scope.snippet = {'name': '1', 'description': 'some desc', 'code': 'echo "hello"', 'author': 'John Doe'};
    }
  })

  .state('404', {
    url: '/404',
    templateUrl: 'views/404.html'
  })

});
