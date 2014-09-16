var requester = require('./services/requester');
function nyt (keys) {
    var keys = keys;

    function czarlos(x,y) { return requester(keys[x],x,y)};

    this.article = {
	search : czarlos('article','search')
    };

    this.bestSellers = {
	get : czarlos('best-sellers','get'),
	search : czarlos('best-sellers','search'),
	history : czarlos('best-sellers','history'),
	overview : czarlos('best-sellers','overview'),
	names : czarlos('best-sellers','names'),
    }
}

module.exports = nyt;
