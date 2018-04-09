(function(){
    "use strict";
    angular
        .module("ngHouses")
        .factory("housesFactory", function($http){
            function getHouses() {
                return $http/get('get/houses.json')
            }
            return {
                getHouses: getHouses
            }

        });
})();