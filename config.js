var response_lib = require('./lib/response_lib');
var reql = require('./lib/request_lib');

function stdPath (name) {
    return function(args) {return reql.buildPath(name);}
}
    
var config = {
    'article' : {
	'base' : '/svc/search/v2/articlesearch',
	'search' : function(args){ return ''},
    },
    'best-sellers' : {
	'base' : '/svc/books/v2/lists',
	'get' : function(args) {
	    return reql.buildPath(response_lib.checkField(args['YYYY-MM-DD'],''),args['list-name'])},
	'search' : function(args) {
	    return reql.buildPath(args['list-name'])},
	'history' : stdPath('history'),
	'overview' : stdPath('overview'),
	'names': stdPath('names'),
	
    },
};

module.exports = config;