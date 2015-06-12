appointments.factory('patientsFactory', function($http) {

	var patient = '';
	var factory = {};

	factory.getAppointments = function (callback){
		$http.get('/appointments').success(function(output){
			callback(output);
		})
	};

	factory.addPatient = function (info, callback) {
		console.log(info);
		$http.post('/add_patient', info).success(function(data){
			callback(data);
		});
	}

	factory.addAppt = function (info, callback) {
		$http.post('/add_appointment', info).success(function(data){
			callback(data);
		})
	}

	factory.removeAppt = function (info, callback) {
		$http.post('/remove_appointment', info).success(function(output){
			callback(output);
		})
	}


	return factory;
})