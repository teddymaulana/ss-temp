App.controller('StepTwoController', ['$scope', '$timeout', '$cookies', "$filter", '$location', '$rootScope', "$http",
	function ($scope, $timeout, $cookies, $filter, $location, $rootScope, $http) {
		$scope.business = {};
		$cookies.put('steps', 'step2');
		$scope.processing = false;
		$scope.submitted = false;
		$scope.business.device = $cookies.get('device');
		console.log($cookies.get('device'));
		$scope.submit = function () {
			if ($scope.registrationForm.$invalid) {
				$scope.submitted = true;
				return;
			}
			
			data =  {
				"data": {
					"type": "Business",
						"attributes": {
						"email": $scope.business.email,
						"name": $scope.business.name,
						"userPassword": $scope.business.userPassword,
						"device": $cookies.get('device'),
						"existingWeb": parseInt($cookies.get('existingWeb'))
					}
				}
			}
			console.log(data);
			$scope.processing = true;
			$http({
				method: "POST",
				url: $rootScope.apiUrl + "/businesses.json?createUser=true&generateDefaultSubdomainName=true&confirmLink=http://pumpupthejam.co/confirm",
				data: data
			}).then(function mySucces(resp) {
				$scope.processing = false;
				if (resp.data.errors) {
					$scope.registrationForm.email.$setValidity("emailTaken", false);
					return;
				} else {
					$cookies.put('steps', 'completed');
					console.log(resp);
					$location.path("/completed");
				}
			}, function myError(response) { 
				$scope.processing = false; 
				$scope.registrationForm.email.$setValidity("emailTaken", false);
				return;
			});	
		}

		$scope.removeValidate = function () {
			$scope.registrationForm.email.$setValidity("emailTaken", true);
		}
		
		/*
		if (!($cookies.get('agreement') === 'agree'))
			$location.path("/apply");

		$scope.user = {};

		$cookies.put('steps', 'step2');
		// $scope.area_codes = $rootScope.areaCodes.countries;
		$scope.area_codes = [];
		$scope.user.area_code = "+1"; //$scope.area_codes[0]["code"];
		$scope.processing = false;
		$scope.submitted = false;
		$scope.flag = 'us';

		$http({
			method: 'GET',
			url: $rootScope.apiUrl + "/phones"
		}).then(function mySuccess(resp) {
			$scope.area_codes = resp.data;
		}, function myError(resp) {}).then(function () {
			$('.ui.dropdown').dropdown({
				onChange: function (value, text, $selectedItem) {
					$scope.user.area_code = $("input[name='area_code']").val();
				}
			});
		});

		if ($cookies.get('auth_token') !== "" && $cookies.get('auth_token') != undefined) {
			$http({
				method: "GET",
				url: $rootScope.apiUrl + "/profile",
				headers: {
					"X-Auth-Token": $cookies.get('auth_token')
				}
			}).then(function mySucces(resp) {
				if (resp.data.data) {
					$scope.user = resp.data.data.attributes;
					$scope.user.phone_number = resp.data.data.attributes.phoneNumber;
					$scope.user.area_code = resp.data.data.attributes.areaCode;
					var flags = $filter('filter')($scope.area_codes, {
						dial_code: $scope.user.area_code
					});
					$scope.flag = flags && flags.length ? flags[0]['code'] : 'us';
				}
			}, function myError(response) {});
		}

		$scope.submit = function () {
			if ($scope.registrationForm.$invalid) {
				$scope.submitted = true;
				return;
			}
			data = {
				"data": {
					"type": "user",
					"attributes": $scope.user
				}
			}
			$scope.processing = true;
			$http({
				method: "POST",
				url: $rootScope.apiUrl + "/sign_up",
				headers: {
					"X-Auth-Token": $cookies.get('auth_token')
				},
				data: data
			}).then(function mySucces(resp) {
				$scope.processing = false;
				if (resp.data.errors) {
					$scope.registrationForm.email.$setValidity("emailTaken", false);
				} else {
					attrs = resp.data.data.attributes;
					$cookies.put("auth_token", attrs.authenticationToken);
					$cookies.put("acc_status", attrs.status);
					$cookies.put('steps', 'step3');
					$location.path("/step3");
				}
			}, function myError(response) {});
		}

		$scope.removeValidate = function () {
			$scope.registrationForm.email.$setValidity("emailTaken", true);
		}
		*/
	}
]);