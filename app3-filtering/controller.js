angular.module('filter')
.controller('mainCtrl', function($scope, mainSvc) {

  $scope.people = mainSvc.sendData();
});
