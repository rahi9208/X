let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.get({
		TableName: 'BookingInfoAnomalies',
		Key: { 'ResellerID': 'klkl', 'BookingRef': 'kl' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});

	callback(null, 'Successfully executed Yo' + event.message + process.env['MY_KEY']);
}