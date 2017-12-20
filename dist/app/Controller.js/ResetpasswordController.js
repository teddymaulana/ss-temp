App.controller('ResetpasswordController', ['$scope', '$timeout', '$cookies', '$location', '$http', '$rootScope',
  function ($scope, $timeout, $cookies, $location, $http, $rootScope) {
    $scope.processing = false;
    $scope.submitted = false;

    $scope.submit = function() {
      $scope.submitted = true;
      $scope.processing = true;
      data = {
        "data": {
          "type": "PasswordResetEmail",
          "attributes": {
            "email": $scope.email
          }
        }
      }

      $scope.processing = true;
      $http({
        method: "POST",
        url: $rootScope.apiUrl + "/password_reset_emails?confirmLink=http://pumpupthejam.co/password_reset",
        data: data
      }).then(function mySucces(resp) {
        $scope.processing = false;
        if (resp.data.errors) {
          console.log(resp);
        } else {
          $location.path("/email-sent");
        }
      }, function myError(response) {
        $scope.processing = false;
      });
    };
  }
]);