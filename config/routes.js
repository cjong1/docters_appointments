var patients = require('./../server/controllers/patients.js');
var appointments = require('./../server/controllers/appointments.js');

module.exports = function(app) {

	app.get('/appointments', function(req, res){
		appointments.show(req, res);
	})

	app.post('/add_patient', function(req, res){
		patients.add(req, res);
	})

	app.post('/add_appointment', function(req, res){
		appointments.add(req, res);
	})

	app.post('/remove_appointment', function(req, res) {
		appointments.remove(req, res);
	})

}