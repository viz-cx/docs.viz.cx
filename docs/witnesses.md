# Witnesses

Witnesses are participants whom other members of the VIZ DAO have entrusted with maintaining the blockchain: creating and signing blocks, managing economic and other parameters, as well as updating the blockchain code. Confidence in a delegate is expressed in the number of votes cast for him. In this case, one token shares is accepted for one vote. That is, the larger the share of the account in the DAO, the higher its influence on the election of witnesses.

Witnesses' activities are divided into rounds. In one round, 21 blocks are created with an interval of 3 seconds, so the duration of one round is 63 seconds. No more than 21 witnesses can take part in one round, who, in turn, create and sign new blocks. For each block created, the delegate receives a reward in accordance with the emission model.

One round includes 11 top witnesses (who got the most votes and only change if someone gets more votes) and 10 support witnesses who are automatically selected from all other witnesses.

All witnesses who have not entered the current round must wait for a new round to take the position of the previous support delegate. In this case, the waiting time depends on the number of votes collected by the delegate.

## Penalty and exclusion of the delegate from the chain

If a delegate misses a block, he is assigned a penalty (penalty), which is expressed in a temporary decrease in the number of votes by [percentage determined by witnesses](#witness_miss_penalty_percent) (default is 1%), and which will be extinguished after some time, which also [set by witnesses](#witness_miss_penalty_duration) (default 24 hours).

If, as a result, the delegate has 0 votes, that is, the total percentage of the penalty will be equal to 100%, then the delegate will be excluded from the chain until all penalties have been paid.

In addition, another option for excluding a delegate from the chain is possible: if the delegate skips more than 200 blocks in a row, then he will be excluded from the chain until he manually fixes the problem and until all penalties earned for missing these two hundred blocks expire ...

## Voting for witnesses

There are two ways to vote for witnesses:

Direct voting. With this method of voting, the participant independently decides for which delegate to vote. When voting, the number of net shares is taken into account.

Proxy voting. With this method of voting, the participant chooses a proxy account, which will decide which of the witnesses to vote the votes given to him. In turn, a proxy account can entrust its user's votes to another proxy account. When voting through a proxy account, only the number of net shares is taken into account.

You can vote for a maximum of 100 witnesses at the same time, while the power of the vote is distributed equally among all of them (this is called Fair DPOS). That is, if a participant voted for 4 witnesses, then each will get 25% of the account's votes.

## Manage network parameters

The role of witnesses is to keep the network up and running, accept software updates, and manage blockchain parameters. Witnesses can control the following parameters:

[account_creation_fee](#account-creation-fee) - the minimum cost of creating a new account in liquid tokens;

[create_account_delegation_ratio](#create-account-delegation-ratio) - coefficient that shows how many times more tokens must be spent when creating an account through delegation of share tokens than when creating for liquid tokens (shares = account_creation_fee * create_account_delegation_ratio);

[create_account_delegation_time](#create-account-delegation-time) - the minimum period of time after which the user can return his shares spent on creating an account using delegation (with a regular delegation, the share can be returned after 1 day);

[maximum_block_size](#maximum-block-size) - maximum block size;

[min_delegation](#min-delegation) - the minimum number of delegated shares;

[bandwidth_reserve_below](#bandwidth-reserve-below) - the maximum number of shares of the account, at which the reserve [bandwidth] is allocated to it(./bandwidth.md);

[bandwidth_reserve_percent](#bandwidth-reserve-percent) - percentage of [bandwidth reservation](./bandwidth.md #viz) of the entire bandwidth for accounts with less than bandwidth_reserve_below shares (can be 0);

[vote_accounting_min_rshares](#vote-accounting-min-rshares) - the minimum number of rshares for which the reward will be greater than 0;

[committee_request_approve_min_percent](#vote-accounting-min-rshares) - the minimum percentage of all votes cast for an application in the Committee, at which it is considered confirmed;

[inflation_witness_percent](#inflation-witness-percent) - the percentage of the emission, which is distributed among the 21 witnesses who entered the block signature round;

[inflation_ratio_committee_vs_reward_fund](#inflation-ratio-committee-vs-reward-fund) - the percentage of the remaining emission going to the Committee;

[inflation_recalc_period](#inflation-recalc-period) - the number of blocks through which the blockchain checks the relevance of the emission parameters;

[data_operations_cost_additional_bandwidth](#data_operations_cost_additional_bandwidth) - a multiplier for the extra bandwidth that an account will spend to send transactions without size limits (such transactions include, for example, [custom-transaction](./glossary.md#custom-transaction)) ...

[witness_miss_penalty_percent](#witness_miss_penalty_percent) - the percentage by which the number of votes cast for the delegate is temporarily reduced in case of missing one block.

[witness_miss_penalty_duration](#witness_miss_penalty_duration) - the number of seconds after which the delegate returns the number of votes to [witness_miss_penalty_percent](#witness_miss_penalty_percent) percent, if they were reduced due to missing blocks.

The blockchain software update requires the consent of 17 witnesses per round. The values ​​of the parameters to be voted are equal to the median of the values ​​set by the 21 witnesses in the round.

Detailed description of voted parameters

Below is a table of the types that the blockchain uses:

<div id="format-table"></div>
| Type         | Example           | Range                | Description                                                   |
| ------------ | ----------------- | -------------------- | ------------------------------------------------------------- |
| VIZ asset    | "1.000 VIZ"       | from 0.001 VIZ       | The number of liquid tokens. A string with a decimal number with no more than 3 digits after a period and an obligatory postscript VIZ separated by a space. <br /> Example: "1.123 VIZ" |
| SHARES asset | "1.000000 SHARES" | from 0.000001 SHARES | The number of share tokens. A string with a decimal number with no more than 6 digits after a period and a mandatory SHARES postscript separated by a space. <br /> Example: "1.123456 SHARES" |
| µShares      | 1,000,000         | from 0               | The number of micro-share tokens. 1 μShares = 0.000001 SHARES; 1,000,000 µShares = 1.000000 SHARES. Integer.|
| Percentage   | 1000              | from 1 to 10000      | Percentage in integer number format. 0.01% = 1; 1% = 100; 100% = 10000; |
| Integer      | 1                 |                      | Integer                                                        |

### account_creation_fee

Added: 1.0.0

[Format](#format-table): VIZ asset

To become a share token holder, you need to register an account. An account is a named "wallet" that stores the participant's funds, both liquid and equity. Account registration is not free: to create a new account, one of the existing members of the VIZ DAO must send an account registration transaction and pay liquid tokens, which will then be converted into share tokens of the new account. The minimum amount of tokens that the creator must pay is specified in the account_creation_fee parameter.

### create_account_delegation_ratio

Added: 1.0.0

[Format](#format-table): Integer

An account can be created not only for liquid tokens, but also by delegating part of your shares to a new account at the time of creation. In quantitative terms, creating such an account can be more expensive, but the delegated share can be returned.

This parameter is responsible for how many times more tokens need to be spent when creating an account through the delegation of a share (``shares = account_creation_fee * create_account_delegation_ratio``).

### create_account_delegation_time

Added: 1.0.0

[Format](#format-table): Integer

When creating an account, the registrar cannot return his share immediately, for this he will have to wait as many seconds as specified in create_account_delegation_time.

### maximum_block_size

Added: 1.0.0

[Format](#format-table): Integer

Each block can contain a limited amount of information in bytes. By voting on this option, witnesses can address network scalability issues.

### min_delegation

Added: 1.0.0

[Format](#format-table): VIZ asset

A user cannot delegate to another account the number of shares less than specified in min_delegation, in terms of liquid tokens.

### bandwidth_reserve_below

Added: 1.0.0

[Format](#format-table): SHARES asset

If an account has fewer shares than bandwidth_reserve_below, then additional [bandwidth](./bandwidth.md) is allocated to it. This is useful for keeping newcomers to the system, otherwise they might not be able to conduct transactions under high blockchain bandwidth usage. On the other hand, too generous allocation of blockchain capabilities to micro-accounts can lead to spam by attackers.

### bandwidth_reserve_percent

Added: 1.0.0

[Format](#format-table): Percentage

The percentage of the total [bandwidth](./bandwidth.md) network that is reserved for accounts with less than [bandwidth_reserve_below](#bandwidth-reserve-below) shares. If bandwidth_reserve_percent is 0, then accounts with less than bandwidth_reserve_below shares will not be able to conduct transactions.

### vote_accounting_min_rshares

Added: 1.0.0

[Format](#format-table): µShares

The minimum amount [rshares](./economy.md#rshares), at which the reward will be greater than 0.

You can calculate the rshares of a specific account using the formula

```rshares = s * e%```

where ``s`` is the number of effective shares, ``e%`` is the percentage of effective shares and at the same time the amount of energy expended upon reward.

This parameter was introduced to reduce the load on the blockchain: microscopic rewards do not make sense, but they spend node resources in the same way as ordinary ones.

### committee_request_approve_min_percent

Added: 1.0.0

[Format](#format-table): Percentage

The minimum percentage of all votes cast for an application to the Committee at which the application is considered confirmed.

### inflation_witness_percent

Added: 2.0.0

[Format](#format-table): Percentage

Percentage of the issue, which is distributed among the 21 witnesses who entered the block signature round.

### bandwidth_reserve_below

Added: 1.0.0

[Format](#format-table): SHARES asset

If an account has fewer shares than bandwidth_reserve_below, then additional [bandwidth](./bandwidth.md) is allocated to it. This is useful for keeping newcomers to the system, otherwise they might not be able to conduct transactions under high blockchain bandwidth usage. On the other hand, too generous allocation of blockchain capabilities to micro-accounts can lead to spam by attackers.

### bandwidth_reserve_percent

Added: 1.0.0

[Format](#format-table): Percentage

The percentage of the total [bandwidth](./bandwidth.md) network that is reserved for accounts with less than [bandwidth_reserve_below](#bandwidth-reserve-below) shares. If bandwidth_reserve_percent is 0, then accounts with less than bandwidth_reserve_below shares will not be able to conduct transactions.

### vote_accounting_min_rshares

Added: 1.0.0

[Format](#format-table): µShares

The minimum amount [rshares](./economy.md#rshares), at which the reward will be greater than 0.

You can calculate the rshares of a specific account using the formula

```rshares = s * e%```

where ``s`` is the number of effective shares, ``e%`` is the percentage of effective shares and at the same time the amount of energy expended upon reward.

This parameter was introduced to reduce the load on the blockchain: microscopic rewards do not make sense, but they spend node resources in the same way as ordinary ones.

### committee_request_approve_min_percent

Added: 1.0.0

[Format](#format-table): Percentage

The minimum percentage of all votes cast for an application to the Committee at which the application is considered confirmed.

### inflation_witness_percent

Added: 2.0.0

[Format](#format-table): Percentage

Percentage of the issue, which is distributed among the 21 witnesses who entered the block signature round.
