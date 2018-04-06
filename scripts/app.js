angular
  .module("ngHouses", ["ngMaterial"])
  .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('pink')

  })
  
  
  
   .directive('hiMoco', function(){
       return{
        //    restrict: 'E',
           template: "motwo catttt"
       }
   });