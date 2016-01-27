var app = angular
	.module('storeApp', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', {
		templateUrl: './view/store.html'
	}).
	when('/cart', {
		templateUrl: './view/cart.html'
	}).
	otherwise({
		redirectTo: '/'
	});



});
