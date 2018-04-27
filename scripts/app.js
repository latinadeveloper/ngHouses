angular.module("ngHouses", ["ngMaterial", "ui.router"])
  .config(function($mdThemingProvider) {
     $mdThemingProvider.theme('default')
    .primaryPalette('purple') 

  })
  
  
  
   .directive('hiMoco', function(){
       return{
        //    restrict: 'E',
           template: "motwo catttt"
       }
   });