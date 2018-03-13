var steem = require('steem')

var wif = '';
var voter = 'guest123'
var author = 'ohrak22'
var permlink = 'name-of-my-test-article-post'
var weight = 10000

steem.broadcast.vote(wif, voter, author, permlink, weight, function (err, result) {
    console.log(err, result);
});