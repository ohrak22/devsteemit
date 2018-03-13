var steem = require('steem')

/* Generate private active WIF */
const username = process.env.STEEM_USERNAME;
const password = process.env.STEEM_PASSWORD;
const privActiveWif = steem.auth.toWif(username, password, 'active');
console.log(username, password);

/** Add posting key auth */
steem.broadcast.addKeyAuth({
    signingKey: privActiveWif,
    username,
    authorizedKey: '',
    role: 'posting',
},
    (err, result) => {
        console.log(err, result);
    }
);