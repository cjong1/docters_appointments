var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
	name: String,
	created: { type: Date, default: Date.now }
});

mongoose.model('Patient', PatientSchema);

var AppointmentSchema = new mongoose.Schema({
	name: String,
	date: String,
	time: String,
	complaint: String,
	created: { type: Date, default: Date.now }
});

mongoose.model('Appointment', AppointmentSchema);