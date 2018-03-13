var steem = require('steem')
var config = require('./config.json')

steem.api.getDiscussionsByCreated({ "tag": "kr", "limit": 1 }, function (err, result) {
    console.log(err, result);
});

steem.api.getDiscussionsByAuthorBeforeDate('ohrak22', '', '2017-03-01T00:00:00', 2, function (err, result) {
    console.log(err, result);
});