angular.module('myApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/views/homeView.html',
            controller: 'homeController'
        })
        .state('details', {
            url: '/details/:id',
            templateUrl: 'pages/views/detailsView.html',
            controller: 'detailsController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'pages/views/loginView.html',
            controller: 'loginController'
        })
        .state('map', {
            url: '/map',
            templateUrl: 'pages/views/map.html',
            controller: 'mapController'
        })
});
