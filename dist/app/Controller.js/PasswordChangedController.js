App.controller('PasswordChangedController', ['$scope', '$timeout', '$cookies', 'Upload', '$rootScope', '$location', '$http',
	function ($scope, $timeout, $cookies, Upload, $rootScope, $location, $http) {
		$scope.goHome = function () {
		    $location.path("/");
		}
		
	}
]);