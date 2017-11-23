/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose')
	, config = require('../config');

var option = { useMongoClient: true };
var url = config.getDbConnectionString();
var connection = mongoose.createConnection(url, option);
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
	employeeid: Number,
	employee_name: String
});

var Employee = connection.model('Employee', employeeSchema, 'Employee');

module.exports = Employee;