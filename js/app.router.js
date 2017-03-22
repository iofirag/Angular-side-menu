var app = angular.module('app.router', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/movie');
    
    $stateProvider
        
        .state('movie', {
            url: '/movie',
            templateUrl: '../pages/listViewer.html',
            controller: 'resultViewerCtrl',
        })
        .state('series', {
            url: '/series',
            templateUrl: '../pages/listViewer.html',
            controller: 'resultViewerCtrl',
        })
        .state('game', {
            url: '/game',
            templateUrl: '../pages/listViewer.html',
            controller: 'resultViewerCtrl',
        })
})