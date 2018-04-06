angular.module("ngHouses", ["ngMaterial"])
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