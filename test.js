var keys = 
{ 'article-search' : 'Cfa0057409bd98c30e611427a881555b:15:60978845',
  'timestag' : 'd475d2fd787ef3a56159aa27db9a04a7:7:60978845', 
  'best-sellers' : '9e41b6d2b742dd7a02afba5b26449295:7:60978845',
  'campaign-finance' : 'b3f2dc80dc697b35ca1e4d5ffdad8c0a:17:60978845',
};

var NYT = require('./nyt');

var nyt = new NYT(keys);
// nyt.article.search({'query':'bill gates'}, console.log);
// nyt.bestSellers.get({'list-name':'hardcover-fiction'}, console.log);
// nyt.bestSellers.search({'list-name':'hardcover-fiction'}, console.log);
// nyt.bestSellers.history({'author':'croke'}, console.log)
// nyt.bestSellers.overview({}, console.log) 
// nyt.bestSellers.names({}, console.log) 