var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');
var config = require('../config');

function requester(key, keyName, action) {
    return function(args, callback) {
	console.log(config[keyName][action](args));
	reql.createRequest(
			   args, 
			   callback,
			   key, 
			   config[keyName]['base'], 
			   config[keyName][action](args)
			   );
    }
	
}

 
module.exports = requester;