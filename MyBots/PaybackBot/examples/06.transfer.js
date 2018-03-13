var steem = require('steem')
var config = require('./config.json')

steem.broadcast.transfer(config.active, 'ohrak22', 'ohrak22', '0.001 SBD', '', function (err, result) {
    console.log(err, result);
});