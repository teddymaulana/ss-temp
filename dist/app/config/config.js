/*configuration for app should be here*/

App.config(['$routeProvider', '$locationProvider', '$httpProvider', '$sceDelegateProvider', function($routeProvider, $locationProvider, $httpProvider){
	$locationProvider.html5Mode(true);
}
]);

App.run(function($rootScope, $location, $cookies, ngMeta) {
	$rootScope.go = function ( path ) {
		$location.path( path );
	};
	$rootScope.apiUrl = "http://redkeep-dev.herokuapp.com/v3";
	ngMeta.init();

	$rootScope.setBackground = function(val) {
		$rootScope.whiteBackground = val;
	}

	$rootScope.setHeader = function(header){
      header = header === 'applicant' ? true : false;
      $rootScope.showApplicantHeader = header;
	}
});