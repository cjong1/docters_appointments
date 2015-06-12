appointments.controller('appointmentsController', function ($scope, $location, patientsFactory, localStorageService) {

	$scope.current_patient = localStorageService.get('name');

	patientsFactory.getAppointments(function(data){
		$scope.appointments = data;
	})

	$scope.addAppt = function(){
		$scope.newAppt.patient = localStorageService.get('name');
		patientsFactory.addAppt($scope.newAppt, function(data){
			$scope.newAppt = {};
			$scope.message = data;
		})
	}

	$scope.removeAppt = function(appointment){
		patientsFactory.removeAppt(appointment, function() {
			patientsFactory.getAppointments(function(data){
				$scope.appointments = data;
			})
		})
	}

})