angular.module("ngHouses", ["ngMaterial", "ui.router"])
  .config(function($mdThemingProvider, $stateProvider) {
     $mdThemingProvider.theme('default')
    .primaryPalette('purple'); 

    $stateProvider
        .state( 'stateone', {
        url: '/stateone',
        template: '<h1>I see one 1<h1>'
        });

  });

  
  
  