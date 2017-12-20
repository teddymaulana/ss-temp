App.controller('HomepageController', ['$scope', '$timeout', '$cookies', "$filter", '$location', '$rootScope', "$http", '$document',
	function ($scope, $timeout, $cookies, $filter, $location, $rootScope, $http, $document) {
		$scope.$on('$viewContentLoaded', function(){
			if($location.$$hash){
				var hash = $location.$$hash;
				$timeout(function(){
					var element = angular.element(document.getElementById(hash));
					$document.scrollToElementAnimated(element);
				}, 500);
			}
		});
	}]);