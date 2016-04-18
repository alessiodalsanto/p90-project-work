var routerApp = angular.module('myApp', ['ui.router']);


routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/homeView.html',
            controller: 'homeController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'pages/contactView.html',
            controller: 'contactController'
        })
        .state('details', {
            url: '/details/:id/',
            templateUrl: 'pages/detailsView.html',
            controller: 'detailsController'
        })
        .state('edit', {
            url: '/edit/:id',
            templateUrl: 'pages/editView.html',
            controller: 'editController'
        })
        .state('delete', {
            url: '/delete/:id',
            templateUrl: 'pages/deleteView.html',
            controller: 'deleteController'
        })
        .state('insert', {
            url: '/insert/',
            templateUrl: 'pages/insertView.html',
            controller: 'insertController'
        })
    ;
});

var session;
