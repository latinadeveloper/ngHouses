(function(){
    "use strict";
    angular
        .module("ngHouses")
        .controller("housesCtrl", function($scope) {
            $scope.name = {
                first:  "mimis", 
                last:  "cat"
            };
        })
}) ();