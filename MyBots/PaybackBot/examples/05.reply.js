var steem = require('steem')
var config = require('./config.json')

var author = 'ohrak22'
var parentPermlink = '20180312t090145281z';

steem.broadcast.comment(
    config.post,
    author, // Parent Author
    parentPermlink, // Parent Permlink
    author, // Author
    steem.formatter.commentPermlink(author, parentPermlink), // Permlink
    '', // Title
    'This is a test reply!', // Body
    { tags: ['kr'] }, // Json Metadata
    function (err, result) {
        console.log(err, result);
    }
);