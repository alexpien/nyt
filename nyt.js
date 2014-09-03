var querystring = require('querystring');
var http = require('http');
var utils = require('./utils');

function nyt (keys) {
    var myKeys = keys;

	var request = function (path, data, callback, args) {
		var options = {
			hostname: 'api.nytimes.com',
			path: path
		}
		var req = http.request(options, function(res) {
			res.setEncoding('utf8');
			var buffer = '';
			res.on('data', function(chunk) {
				buffer += chunk;
			});
			res.on('end', function() {
				callback(buffer);
			});
		});

		req.on('error', function(err) {
			callback(err);
		});

		req.end();
	}

	var get = function (path, callback, args) {
		request(path, undefined, callback, args);
	}

    this.best_sellers = function (args, which, prequery, callback) {
		if (which === 'get' && (typeof prequery.date === 'undefined' || typeof prequery.list_name === 'undefined')) {
			throw new Error('Date and list name required to get bestsellers');
		}

		var sub_api = {'get':'lists/' + prequery.date + '/' + prequery.list_name + '.json',
		'search':'lists.json',
		'history':'lists/best-sellers/history.json',
		'overview':'lists/overview.json',
		'names':'lists/names.json'}

		if (!callback) {
            callback = args;
            args = undefined;
        }
        var version = 'v2/';
        var path = '/svc/books/' + version + sub_api[which] + '?' + querystring.stringify(args) + '&' + 'api-key=' + keys.best_sellers;
        this.get(path, callback, args);
    }

    this.article = {
        get : function (args, callback) {
            if(!callback) {
                callback = args;
                args = undefined;
            }
            var path = '/svc/search/v2/articlesearch.json' +
                '?' + querystring.stringify(args) +
                '&' + 'api-key=' + myKeys['article'];
            get(path, callback, args);
        }
    }

    this.bestSellers = {
        get : function (args, callback) {
            if (!callback) {
                callback = args;
                args = undefined;
            }
            var version = 'v2/';
            var books = '/svc/books/';
            var date = args.date;
            var list_name = args['list-name'];
            var args = utils.removeArgs(['date', 'list-name'], args);
            var path = books + version + 'lists/' +
                date + '/' + list_name +
                '.json' + querystring.stringify(args) + '?' + 'api-key=' + myKeys['best-sellers'];
            get(path, callback, args);
        }
        search: function (args, callback) {

        }
        history : function (args, callback) {

        }
        names : function (args, callback) {

        }
    }
}

module.exports = nyt;
