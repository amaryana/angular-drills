angular.module ('arrayApp')
  .controller('mainCtrl', function($scope, mainSvc) {

      $scope.people = mainSvc.sendData();
  });
