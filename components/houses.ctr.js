(function(){
    "use strict";
    angular
        .module("ngHouses")
        .controller("housesCtrl", function($scope) {
            $scope.house = {
                title:  "first house herem", 
                street:  "street goes here",
                price:  "$4.44",
                comments:  "lalalallalalalalallala"
            };
        })
}) ();