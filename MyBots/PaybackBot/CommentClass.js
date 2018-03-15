var steem = require('steem')
var config = require('./config.json')

function CommentClass() {
    this.author = 'paybackbot';
    this.permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
}

CommentClass.prototype.broadcastComment = function () {
    steem.broadcast.comment(
        config.post,
        '', // Parent Author
        'kr', // Parent Permlink
        this.author, // Author
        this.permlink, // Permlink
        'Hello world', // Title
        'My name is paybackbot', // Body
        { tags: ['helloworld', 'paybackbot'] }, // Json Metadata
        function (err, result) {
            console.log(err, result);
        }
    );
}

module.exports = CommentClass;