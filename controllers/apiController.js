/**
 * http://usejsdoc.org/
 */
var Employee = require('../models/employeeModel');
//    , bodyParser = require('body-parser');

module.exports = function(app) {
	
//	app.use(bodyParser.json());
//	app.use(bodyParser.urlencoded({ extended: true}));
	
	app.get('/api/employeeList', function(req, res) {
		Employee.find({}, { _id: 0 }, function(err, result) {
			if (err) {
				throw err;
			}
			console.log("Result: "+result);
			res.json(result);
		});
	});
	
	app.get('/api/employee/:employeeid', function(req, res) {
		Employee.find({ employeeid: req.params.employeeid }, { _id: 0 }, function(err, result) {
			if (err) {
				throw err;
			}
			console.log("Result: "+result);
			res.json(result);
		});
	});
	
//	app.post('api/hireEmployee', function(req, res) {
//		if (req.body.id) {
//			console.log('Employee exists lah');
//		}
//		else {
//			var newlyHired = new Employee({
//				employeeid: 4,
//				employee_name: 'Angelina'
//			});
//			newlyHired.save(function(err) {
//				if (err) {
//					throw err;
//				}
//				
//				res.send('Officially hired!');
//			});
//		}
//	});
};