(function(){
    "use strict";
    angular
        .module("ngHouses")
        .controller("housesCtrl", function($scope, $http, housesFactory, $mdSidenav, $mdToast, $mdDialog ) {
           
           housesFactory.getHouses().then(function(houses){
            $scope.houses = houses.data;
            // console.log(data);
           });   // if over server, you put the url here

           // Place holder for fake data profile
        //    var personSeller = { 
        //        name: 'mimis'
               
        //    }

           $scope.openSidebar = function(){
                $mdSidenav('left').open();
           }
            $scope.closeSidebar = function(){
                $mdSidenav('left').close();
           }
           

            $scope.saveHouse = function(house){
                if(house){
                // house.personSeller = contact;   //render part of profile
                $scope.houses.push(house);
                $scope.classified = {} ;
                $scope.closeSidebar();   
                showToast('house saved');
            }

            $scope.editHouse = function(house){
                $scope.editing = true;
                $scope.openSidebar();
                $scope.house = house;
            }

            $scope.saveEdit = function(){
                $scope.editing = false;
                $scope.classified = {} ;
                $scope.closeSidebar();
                showToast('edit saved');
            }

            $scope.deleteHouse = function(event, house){
                var confirm = $mdDialog.confirm()
                    .title('are you sure you want to delte ' + house.title)
                    .ok('yes')
                    .cancel('no')
                    .targetEvent(event);
                $mdDialog.show(confirm).then(function() {
                    var index = $scope.houses.indexOf(house);
                    $scope.houses.splice(index,1);
                  }, function(){
                });
            }

            function showToast(message) {
                $mdToast.show(  
                    $mdToast.simple()                  
                    .content(message)
                    .position('top right')
                    .hideDelay(2000)
                    );
                };
            }

        });
}) ();