(function(){
    "use strict";
    angular
        .module("ngHouses")
        .controller("housesCtrl", function($scope, $http, housesFactory, $mdSidenav) {
           
           housesFactory.getHouses().then(function(houses){
            $scope.houses = houses.data;
            // console.log(data);
           });   // if over server, you put the url here

           $scope.openSidebar = function(){
                $mdSidenav('left').open();
           }
            $scope.closeSidebar = function(){
                $mdSidenav('left').close();
           }
           
        });
}) ();