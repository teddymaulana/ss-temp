App.controller('StepOneController', ['$scope', '$timeout', '$location', '$cookies', function ($scope, $timeout, $location, $cookies) {

  /*
  $scope.step = $cookies.get('steps') == '' || $cookies.get('steps') == undefined ? 'step2' : $cookies.get('steps');
  $scope.agreement = $cookies.get('agreement');
  $('.ui.agreement.checkbox').checkbox($scope.agreement === 'agree' ? 'check' : 'uncheck')
  $('.ui.agreement.checkbox').checkbox({
    onChecked: function () {
      $scope.agreement = 'agree';
      $cookies.put('agreement', 'agree')
      $scope.$apply();
    },
    onUnchecked: function () {
      $scope.agreement = 'disagree';
      $cookies.put('agreement', 'disagree')
      $scope.$apply();
    }
  });
  */
  $scope.step = $cookies.get('steps') == '' || $cookies.get('steps') == undefined ? 'step2' : $cookies.get('steps');
  $scope.website = ['No, We Don`t Have Website', 'Yes, It`s Powered by Wordpress', 'Yes, It`s Powered by Other Platform'];
  $scope.submitted = false;
  $scope.processing = false;
  $scope.ios = true;
  $scope.android = false;
  $scope.device = 'ios';
  $scope.business = {};

  $scope.chooseDevice = function (device) {
    if (device === 'ios') {
      $scope.ios = true;
      $scope.android = false;
      $scope.device = 'ios';
    } else {
      $scope.ios = false;
      $scope.android = true;
      $scope.device = 'android';
    }
  }

  $(".ui.dropdown.website").dropdown({
      onChange: function (value) {
        $scope.business.website = value;
        $scope.$apply();
      }
  })

  $scope.submit = function () {
      if ($scope.registrationForm.$invalid) {
        $scope.submitted = true;
        return;
      }
      data = {
        "data": {
          "device": $scope.device,
          "existingWeb": $scope.business.website,
        }  
      }
      $scope.processing = true;
      $cookies.put('device', $scope.device);
      $cookies.put('existingWeb', $scope.business.website);
      $cookies.put('steps', 'step2');
      $location.path("/step-2");
  }

  $scope.removeValidate = function () {
      $scope.registrationForm.email.$setValidity("emailTaken", true);
    }

}]);