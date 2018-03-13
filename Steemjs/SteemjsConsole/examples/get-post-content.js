var steem = require('steem')

const resultP = steem.api.getContentAsync('ohrak22', 'name-of-my-test-article-post');
resultP.then(result => console.log(result));