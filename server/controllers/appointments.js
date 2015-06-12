var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

module.exports = (function() {
	return {
		show: function(req, res) {
			Appointment.find({}, function(err, results){
				if(err)
				{
					console.log('Something went wrong');
				}
				else
				{
					res.json(results);
				}
			})
		},

		add: function(req, res) {
			var new_appointment = new Appointment({name: req.body.patient, date: req.body.date, time: req.body.time, complaint: req.body.complaint});

			Appointment.find({date: req.body.date}, function(err, appointment){
				var appointments_booked = Object.keys(appointment).length;
				if(appointments_booked >= 3) {
					res.json({error: 'Too many appointments booked for that day!'});
				}
				else
				{
					new_appointment.save(function(err, response) {
						if(err)
						{
							console.log('Appointment was not saved into database.');
						}
						else
						{
							console.log('Appointment was saved into database.')
							res.json({success: 'Appointment was added successfully!'});
						}
					})
				}
			})
		},

		remove: function(req, res) {
			Appointment.remove({_id: req.body._id}, function(err, response) {
				if(err) {
					console.log('Appointment not deleted.');
				}
				else {
					res.json(response);
				}
			})
		}
	}
})();