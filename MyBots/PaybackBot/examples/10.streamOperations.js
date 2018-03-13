var steem = require('steem')
var config = require('./config.json')

steem.api.streamOperations(function (err, operations) {
    operations.forEach(function (operation) {
        console.log(operation);
    });
});

// Open Command Line.
// node 10.streamOperations.js > result.txt
