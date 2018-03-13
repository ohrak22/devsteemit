var steem = require('steem')
var config = require('./config.json')

var voter = 'guest123'
var author = 'ohrak22'
var permlink = 'name-of-my-test-article-post'
var weight = 10000

steem.broadcast.vote(config.post, voter, author, permlink, weight, function (err, result) {
    console.log(err, result);
});