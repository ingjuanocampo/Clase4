/**
 * Created by alejo8591 on 21/04/15.
 */
angular.module('lab31.controllers', ['lab31.services'])
.controller('Lab31Controller', function($scope, data){
    'use strict';
    data.query(function(data){
       $scope.data = data;
    });
});