var steem = require('steem')
var config = require('./config.json')

steem.api.getDiscussionsByAuthorBeforeDate('ohrak22', '', '2017-03-01T00:00:00', 5, function (err, result) {
    if (err) {
    }
    else {
        for (i = 0; i < result.length; i++) {
            console.log('title: ', result[i].title);
            console.log('body: ', result[i].body);
            console.log('net_votes: ', result[i].net_votes);
            for (v = 0; v < result[i].active_votes.length; v++) {
                console.log('active_votes: ', result[i].active_votes[v]);
            }
            console.log('pending_payout_value: ', result[i].pending_payout_value);
        }
        
    }
});