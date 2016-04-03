angular.module('starwars')
.controller('mainCtrl', function($scope, mainSvc) {

    mainSvc.getShip()
        .then(function(starships) {
            $scope.ships = starships;
        });

});
