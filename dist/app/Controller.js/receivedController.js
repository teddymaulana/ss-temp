App.controller('receivedController', ['$scope', '$timeout', '$cookies', "$location", "$rootScope", function ($scope, $timeout, $cookies, $location, $rootScope) {
  if ($cookies.get('steps') !== 'completed') {
    $location.path("/");
  }
  $scope.userDevice = $cookies.get('device');
  console.log($scope.userDevice);
  if ($scope.userDevice) {
    $cookies.put('device', "");
  }
  $cookies.put('status', "");
  $cookies.put('steps', "");
  $cookies.put('existingWeb', "");

  $scope.goHome = function () {
    $location.path("/");
  }
}]);