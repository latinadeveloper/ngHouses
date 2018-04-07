(function(){
    "use strict";
    angular
        .module("ngHouses")
        .controller("housesCtrl", function($scope) {
            $scope.houses =[
                {
                   "id": "1",
                    "title":  "Blue House", 
                    "street":  "19608 Bent Brook Ct, Dallas, TX 75252",
                    "price":  "659000",
                    "comments":  "big open space, blue european kitchen",
                    "image": "https://ap.rdcpix.com/1034684193/6271bdbd56c9ab416426bb0ac1a6ee17l-m0xd-w1020_h770_q80.jpg",
                    "pro": "pool",
                    "con": "needs unfinished bar, really dark media room, small upstairs bathrooms" 

                },
                {
                    "id": "2",
                     "title":  "Chandellier House", 
                     "street":  "4411 Highlander Dr, Dallas, TX 75287",
                     "price":  "589000",
                     "comments":  " open living room",
                     "image": "https://ap.rdcpix.com/284693688/a68214ff740788b94037402664860806l-m0xd-w1020_h770_q80.jpg",
                     "pro": "nice clean",
                     "con": "two reg size bed upstairs" 
 
                 },
                 {
                    "id": "3",
                     "title":  "Wallpaper House", 
                     "street":  "6907 Maple Creek Ln, Dallas, TX 75252",
                     "price":  "529900",
                     "comments":  " open living room",
                     "image": "https://ap.rdcpix.com/91002527/8aaeddeee39975e24a1572ce81f18cccl-m0xd-w1020_h770_q80.jpg",
                     "pro": "separate living area",
                     "con": "a bit outdated" 
 
                 },
                 {
                    "id": "4",
                     "title":  "Crooked Floor House", 
                     "street":  "4919 Holly Tree Dr, Dallas, TX 75287",
                     "price":  "700000",
                     "comments":  " open living room",
                     "image": "https://ap.rdcpix.com/388037490/583d655841375d6f30d07bb06610e176l-m0xd-w1020_h770_q80.jpg",
                     "pro": "nice clean, new, updated",
                     "con": "higher price range, large street back, crooked floor" 
    
                 }
            
            
             ]
            
        })
}) ();