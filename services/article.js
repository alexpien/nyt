var response_lib = require('../lib/response_lib');
var reql = require('../lib/request_lib');

var base = '/svc/search/v2/articlesearch';
var keyName = 'article-search';
var myKeys;

function article (keys) {
	this.myKeys = keys;
}

function requester(keys, based , specific, keyname) {
    return function(args, callback) {
	console.log(keys);
	reql.createRequest(args, callback, keys, based, specific, keyname);
    }
	
}
 
article.prototype.search = requester('cfa0057409bd98c30e611427a881555b:15:60978845',base,'');



module.exports = article;
