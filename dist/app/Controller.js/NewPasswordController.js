App.controller('NewPasswordController', ['$scope', '$timeout', '$cookies', '$location', '$http', '$rootScope', '$routeParams',
  function ($scope, $timeout, $cookies, $location, $http, $rootScope, $routeParams) {
    
    $scope.processing = false;
    $scope.submitted = false;
    console.log($routeParams);
    $scope.submit = function () {
      if ($scope.registrationForm.$invalid) {
        $scope.submitted = true;
        return;
      }
      if ($scope.password !== $scope.cpassword) {
        $scope.registrationForm.cpassword.$setValidity("notMatch", false);
        return;
      }
      data = {
        "data": {
          "type": "Password",
          "attributes": {
            "password": $scope.password
          }
        }
      }
      $scope.processing = true;
      $http({
        method: "PATCH",
        url: $rootScope.apiUrl + "/passwords/" + $routeParams.id,
        data: data
      }).then(function mySucces(resp) {
        $scope.processing = false;
        if (resp.data.errors) {

        } else {
          attrs = resp;
          $cookies.put('steps', 'completed');
          $location.path("/password-changed");
        }
      }, function myError(response) { $scope.processing = false; });
    }

    $scope.removeValidate = function () {
      $scope.registrationForm.cpassword.$setValidity("notMatch", true);
    }
  }
]);