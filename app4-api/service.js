angular.module('starwars')
    .service('mainSvc', function($http) {

          this.getShip = function() {
            return $http({
                  method: "GET",
                  url: "http://swapi.co/api/starships/"
            })
            .then(function(response) {

                return response;
            });
          };
});
