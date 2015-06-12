var mongoose = require('mongoose');
var Patient = mongoose.model('Patient');

module.exports = (function() {
	return {
		add: function(req, res) {
			var new_patient = new Patient({name: req.body.name});
			new_patient.save(function(err, response) {
				if(err)
				{
					console.log('Patient was not saved into database.')
				}
				else
				{
					console.log('Patient was saved into database.')
					res.json(response);
				}
			})
		}
	}
})();