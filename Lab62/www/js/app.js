// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });



})



angular.module('starter', ['ionic'])

.controller('MyCtrl', function($scope) {
    $scope.myTitle = 'Template';
    
    $scope.data = { 'volume' : '60' };
    $scope.datam= { 'min' : '30' };


    
     
});

/*


angular.module('starter', ['ionic'])

.controller('MyCtrl', function($scope, $timeout) {
    $scope.myTitle = 'Template';
    
    $scope.data = { 'volume' : '85' };
    
    var timeoutId = null;
    
    $scope.$watch('data.volume', function() {
        
        

                console.log($scope.data.volume);

        
        if(timeoutId !== null) {
            console.log('Ignoring this movement');
            return;
        }
        
        console.log('Not going to ignore this one');
        timeoutId = $timeout( function() {
            
            console.log('It changed recently!');
            
            $timeout.cancel(timeoutId);
            timeoutId = null;
            
            // Now load data from server 
        }, 1000); 
        
        
    });
    
});*/