var steem = require('steem')

const privWif1 = '';
const privWif2 = '';

steem.broadcast.send({
    extensions: [],
    operations: [
        ['vote', {
            voter: 'sisilafamille',
            author: 'ohrak22',
            permlink: 'name-of-my-test-article-post',
            weight: 10000
        }]
    ]
}, [privWif1, privWif2], (err, result) => {
    console.log(err, result);
});