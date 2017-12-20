App.controller('ContactController', ['$scope', '$timeout', '$cookies', "$filter", '$location', '$rootScope', "$http",
	function ($scope, $timeout, $cookies, $filter, $location, $rootScope, $http) {
		$scope.contact = {};
		$scope.processing = false;
		$scope.submitted = false;
		$scope.flag = 'us';
		$scope.sent = false;

		$('.ui.dropdown.subject').dropdown({
			onChange: function (value, text, $selectedItem) {
				$scope.contact.subject = $("input[name='subject']").val();
				$scope.contactForm.subject.$setValidity('required', true);
				$scope.$$phase || $scope.$apply();
			}
		});

		$scope.submit = function () {
			if($scope.contactForm.$invalid){
                $scope.submitted = true;
				return;
			}
			data = {
				"data": {
					"type": "contact",
					"attributes": $scope.contact
				}
			}
			$scope.processing = true;
			$http({
				method: "POST",
				url: $rootScope.apiUrl + "/contact",
				data: data
			}).then(function mySucces(resp) {
				$scope.processing = false;
				if(resp.data.data){
				   $scope.contact = {}
				   $scope.sent = true;
				   $scope.submitted = false;
				}
			}, function myError(response) {});
		}
	}
]);