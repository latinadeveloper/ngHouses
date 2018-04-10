(function(){
    "use strict";
    angular.module("ngHouses")
        .factory("housesFactory", function($http){
            function getHouses() {
                return $http.get('data/houses.json');
            }
            return {
                getHouses: getHouses
            }

        });
})();