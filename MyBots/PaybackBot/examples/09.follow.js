var steem = require('steem')
var config = require('./config.json')

var json = JSON.stringify(
    ['follow', {
        follower: 'ohrak22',
        following: 'ned',
        what: ['blog']
    }]
);

steem.broadcast.customJson(config.post, [], ['ohrak22'], 'follow', json, function (err, result) {
    console.log(err, result);
});