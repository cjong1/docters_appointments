var appointments = angular.module('appointments', ['ngRoute','LocalStorageModule']);

appointments.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/patients.html'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html'
		})
		.when('/new_appointment', {
			templateUrl: 'partials/new_appointment.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});