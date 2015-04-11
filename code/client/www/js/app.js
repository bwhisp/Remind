document.addEventListener('deviceready', function (){

}, false);

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/v1', {
			templateUrl: 'views/v1.html',
			controller: 'vCtrl'
		})
		.otherwise({
			redirectTo: '/v1'
		});
}]);
