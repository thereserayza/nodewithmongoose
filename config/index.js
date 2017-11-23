var configValues = require('./configValues.json');

module.exports= {
		getDbConnectionString: function() {
			return 'mongodb://' + configValues.username + ':' + configValues.password +
				'@ds113746.mlab.com:13746/karteu_project_trial';
		}
};