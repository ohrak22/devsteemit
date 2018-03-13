var steem = require('steem')

steem.api.getAccounts(['ned', 'dan'], function (err, result) {
    console.log(err, result);
});