var steem = require('steem')
var config = require('./config.json')

var author = 'ohrak22'
var permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();

steem.broadcast.comment(
    config.post,
    '', // Parent Author
    'kr', // Parent Permlink
    author, // Author
    permlink, // Permlink
    '', // Title
    'This is a test!', // Body
    { tags: ['test'], app: 'steemjs/examples' }, // Json Metadata
    function (err, result) {
        console.log(err, result);
    }
);