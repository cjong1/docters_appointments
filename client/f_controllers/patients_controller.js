appointments.controller('patientsController', function ($scope, $location, patientsFactory, localStorageService) {
	
	var patient = '';
	$scope.current_patient = localStorageService.get('name');

	$scope.addPatient = function(){
		patientsFactory.addPatient($scope.newPatient, function(data){
			localStorageService.set('name', data.name);
			$scope.name = data.name;
			$scope.newPatient = {};
			$location.path('/dashboard');
		})
	}

})