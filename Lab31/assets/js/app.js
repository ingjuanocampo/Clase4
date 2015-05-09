angular.module('lab31', ['ngRoute', 'lab31.controllers', 'lab31.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'js/templates/home.html'
        })
        .when('/data', {
            controller: 'Lab31Controller',
            templateUrl: 'js/templates/data.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});