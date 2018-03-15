var steem = require('steem')
//var config = require('./config.json')
var config = require('./config - ohrak22.json')

function AutoReward() {
    this.author = 'ohrak22';
    this.permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
}

AutoReward.prototype.claimRewardBalance = function () {
    steem.api.getAccounts([this.author], function (err, response) {
        if (err) {
            console.log("ERROR: Something Went Wrong Grabbing @" + account + "'s Account Info!");
        }
        if (response) {
            console.log("response: " + JSON.stringify(response));
            rewardvests = response[0];
            rv = rewardvests["reward_vesting_balance"];
            rvnum = parseFloat(rv);
            rs = rewardvests["reward_vesting_steem"];
            rd = rewardvests["reward_sbd_balance"];
            console.log("Pending Rewards: " + rd + " / " + rs + " / " + rv);
            if (rvnum > 0) {
                console.log("Pending Rewards Found! Claiming Now!");
                steem.broadcast.claimRewardBalance(config.post, this.author, '0.000 STEEM', '0.000 SBD', rv, function (err, result) {
                    if (err) {
                        console.log("ERROR Claiming Rewards! :(");
                        console.log(err);
                    }
                    if (result) {
                        console.log("Woot! Rewards Claimed!");
                    }
                });
            }
        }
    });
}

module.exports = AutoReward;

//response: [{ "id": 848524, "name": "paybackbot", "owner": { "weight_threshold": 1, "account_auths": [], "key_auths": [["STM6kbZa7G4JtEgx8JK76nKbiMxRKRxGbS33vC4DQnN4J2rjaZ69r", 1]] }, "active": { "weight_threshold": 1, "account_auths": [], "key_auths": [["STM62EcKcNTcBUFAoFQqEmt77YAGuZUmBJb5F5W9FdpHJ7auuKK2Y", 1]] }, "posting": { "weight_threshold": 1, "account_auths": [], "key_auths": [["STM6UDPcFqRRoz7PqhiyM8VZgxSu8W9TQWEef12ztgMoPVryFqpx4", 1]] }, "memo_key": "STM85mCMYHbaiRiCYFWwt9oWcXzKx7BHZ1mibB8poT1k35f4NbbD3", "json_metadata": "", "proxy": "", "last_owner_update": "1970-01-01T00:00:00", "last_account_update": "1970-01-01T00:00:00", "created": "2018-03-13T07:59:00", "mined": false, "owner_challenged": false, "active_challenged": false, "last_owner_proved": "1970-01-01T00:00:00", "last_active_proved": "1970-01-01T00:00:00", "recovery_account": "ohrak22", "last_account_recovery": "1970-01-01T00:00:00", "reset_account": "null", "comment_count": 0, "lifetime_vote_count": 0, "post_count": 2, "can_vote": true, "voting_power": 10000, "last_vote_time": "2018-03-13T07:59:00", "balance": "0.000 STEEM", "savings_balance": "0.000 STEEM", "sbd_balance": "0.000 SBD", "sbd_seconds": "0", "sbd_seconds_last_update": "1970-01-01T00:00:00", "sbd_last_interest_payment": "1970-01-01T00:00:00", "savings_sbd_balance": "0.000 SBD", "savings_sbd_seconds": "0", "savings_sbd_seconds_last_update": "1970-01-01T00:00:00", "savings_sbd_last_interest_payment": "1970-01-01T00:00:00", "savings_withdraw_requests": 0, "reward_sbd_balance": "0.000 SBD", "reward_steem_balance": "0.000 STEEM", "reward_vesting_balance": "0.000000 VESTS", "reward_vesting_steem": "0.000 STEEM", "vesting_shares": "204.171546 VESTS", "delegated_vesting_shares": "0.000000 VESTS", "received_vesting_shares": "29604.874298 VESTS", "vesting_withdraw_rate": "0.000000 VESTS", "next_vesting_withdrawal": "1969-12-31T23:59:59", "withdrawn": 0, "to_withdraw": 0, "withdraw_routes": 0, "curation_rewards": 0, "posting_rewards": 0, "proxied_vsf_votes": [0, 0, 0, 0], "witnesses_voted_for": 0, "average_bandwidth": 447565619, "lifetime_bandwidth": 448000000, "last_bandwidth_update": "2018-03-13T09:35:42", "average_market_bandwidth": 0, "lifetime_market_bandwidth": 0, "last_market_bandwidth_update": "1970-01-01T00:00:00", "last_post": "2018-03-13T09:35:42", "last_root_post": "2018-03-13T09:35:42", "vesting_balance": "0.000 STEEM", "reputation": 1489989, "transfer_history": [], "market_history": [], "post_history": [], "vote_history": [], "other_history": [], "witness_votes": [], "tags_usage": [], "guest_bloggers": [] }]
