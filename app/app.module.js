angular.module('app', [
    'templates',
    'ui.router',
    'todo'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/todo');
  })
  .run(function () {

  });
