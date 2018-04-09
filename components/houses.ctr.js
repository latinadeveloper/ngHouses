(function(){
    "use strict";
    angular
        .module("ngHouses")
        .controller("housesCtrl", function($scope, $http) {
           
           $http.get('data/houses.json').then(function(houses){
            $scope.houses = houses.data;
            // console.log(data);
           })   // if over server, you put the url here

           
        });
}) ();