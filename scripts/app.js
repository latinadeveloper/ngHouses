angular.module("ngHouses", ["ngMaterial", "ui.router"])
  .config(function($mdThemingProvider, $stateProvider) {
     $mdThemingProvider.theme('default')
    .primaryPalette('purple'); 

    $stateProvider
        .state( 'stateone', {
        url: '/stateone',
        template: '<h1>{{ stateone.message }}</h1>',
        controller: 'stateOneCtrl as stateone'
      })
        .state( 'statetwo', {
        url: '/statetwo',
        template: 'Me 2 <div> <md-button ui-sref="two.more"> go to nested </md-button><ui-view></ui-view> </div>'
      })
       .state('statetwo.more', {
        url: '/more',  
        template: ' I am in the inside/deep end '

       });

  })


.controller('stateOneCtrl', function($scope){
  var vm = this;
  vm.message = "im from state one";
});
  
  // the line 15 is not renedering as a nested state
  

  