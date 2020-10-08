# Accounts and Permissions

An account is an account of a member or a group of members [DAO](./glossary.md#dao) VIZ, with which operations are performed in the VIZ blockchain.

When an account is created, it is assigned a unique name of length from [2](https://github.com/VIZ-Blockchain/viz-cpp-node/blob/master/libraries/protocol/include/graphene/protocol/config.hpp#L89) selected by the participant as an identifier to [25](https://github.com/VIZ-Blockchain/viz-cpp-node/blob/master/libraries/protocol/include/graphene/protocol/config.hpp#L89) characters Latin alphabet. Two-character accounts are reserved for the very first VIZ members and are no longer assigned. You cannot change the account name after creation.

Account holders can create accounts of the "second level", and those, in turn, the third, etc., which are separated from the main account (and subsequent) by a dot. For example, the account @name (and only he) can create the account @ subname.name, which, in turn, @ subsubname.subname.name, etc.

An account has four key pairs (public and private):

- master key,
- active key,
- regular key,
- communication key.

Each public key must be generated from different private keys using an elliptic cryptography algorithm for the curve [secp256k1](https://en.bitcoin.it/wiki/Secp256k1) (the same curve is used in Bitcoin).

  The table below shows the parameters for secp256k1*

| Parameter| Value                                                        |
| -------- | ------------------------------------------------------------ |
| p        | 0xffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f |
| a        | 0                                                            |
| b        | 7                                                            |
| Gx       | 0x79be667e f9dcbbac 55a06295 ce870b07 029bfcdb 2dce28d9 59f2815b 16f81798 |
| Gy       | 0x483ada77 26a3c465 5da4fbfc 0e1108a8 fd17b448 a6855419 9c47d08f fb10d4b8 |
| n        | 0xffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141 |
| h        | 1                                                            |

Each time a transaction is sent on behalf of an account, the user must sign it using the [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) algorithm with one of three private keys, which corresponds to the main, active or regular public key. A communicative key cannot be used to send transactions. It is used to encrypt messages, for example, in a token transfer note. When signing, it should be borne in mind that each key has its own access level, that is, different keys are responsible for different types of transactions.

*The table below describes all the keys and operations that can be performed with their help*

| Key                       | Permissions                                                   |
| ------------------------- | ------------------------------------------------------------ |
| Regular                   | Sending [custom-transactions](./glossary.md#custom-transaction), rewarding users, changing account metadata, any actions with [committee.](./economy.md#committee) |
| Active                    | Everything that can be done using a regular key, as well as operations with [assets](./economy.md#assets) and voting for [delegates](./witnesses.md). |
| Master                    | Everything that can be done with regular and active keys, as well as replacement of all keys. |
| Memo                      | Does not allow signing transactions, but it can be used to classify messages, for example, encrypt using the [ECDH](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie–Hellman) algorithm when transferring tokens |

## Account with multiple users

If the user knows the master private key of a particular account, then he can add other users to the account.

There are two options for how to do this. The first one is to add another key to the account (master, active or regular) and transfer it to the second user. The second is to register a main, active or regular role for another account in your account, that is, link one account to another. The difference between a role and keys is that the owners of the linked account will use their private keys to sign transactions.

Note that linking accounts is a more flexible way of adding users to the main account, since by linking one account, you can immediately assign permissions to a group of people.

It should be borne in mind that the user who received an additional key, or an account that is assigned one of the three roles, when signing transactions on behalf of the main account, is limited only by the access level of the key or role. That is, if a user is assigned a master key or if the account is assigned a main role, then both the user and the account will be able to determine the access levels to the main account for other members of the VIZ DAO, and even restrict access to the original owner of the account.

## Multi-signature

To avoid abuse of authority, you can set a weight threshold for each access level, upon reaching which you can send a transaction, and set a weight for each user or linked account. Thus, to send a transaction, a signature of several users will be required, so that the sum of their weights is not less than the weight threshold. This signature scheme is called multisignature.

### Multisignature examples

Let three users be registered in an account with a weight threshold of 100: Alice, Max and Bob. Bob has a weight of 25, Max also has 25, and Alice has 50. Then Bob needs Alice and Max signatures to send the transaction, because only in this case the total weight of the signers will be equal to the weight threshold of the account 100. Max or Alice must do the same. to send a transaction on behalf of the account. Thus, no one will be able to send a transaction without the consent of all participants, which avoids abuse of authority by any of the users.

If, with the same distribution of the weights of the multisignature participants, the weight threshold is set at 75, then the signature of Alice (weight 50) and any of the other multisignature participants (with weight 25) is sufficient for the transaction. At the same time, Max (25) and Bob (25) will not be able to sign the transaction without Alice (50).

## Registration

To create a new account in VIZ, you need to send a special transaction (account_create), which will register a new account. This transaction specifies:

- the name of the new account ([name](#name));
- name of the referrer account ([referrer](#referrer)) - optional;
- account metadata ([json_metadata](#json-metadata)) - optional;
- four public keys: master ([master_authority](#master-authority)), active ([active_authority](#active-authority)), regular ([regular_authority](#regular-authority)), communicative ([memo](#memo-key)).

Instead of keys, you can link existing accounts to roles of the same name. True, in the latter case, you still have to prescribe a communicative key, since there is no role for it.

The sender of the transaction must pay for the creation of an account an amount not less than [indicated by the delegates](./witnesses.md#account-creation-fee). All liquid tokens that the registrar pays will be converted into shares of the new account.

In addition to the direct transfer of liquid tokens, there are two more ways to create an account: registration through delegation of a share and creation through an invite code.

### Registration through share delegation

In order not to spend liquid tokens, the registrar can create a new account [by delegation](./economy.md#shares). To do this, he must also send a transaction, but indicate in it not the number of liquid tokens that he is ready to spend (transfer to the share of the new account), but the number of share tokens that he is ready to delegate to the new account.

The value of all delegated shares in viz must be no less than [indicated by delegates](./accounts.md#create-account-delegation-ratio).

Along with delegation, the registrar can spend liquid tokens, they will also be converted into shares of the new account, but the transaction price will not be affected, the account will be created either for viz or for shares.

If the number of translated viz is enough for registration for liquid tokens, then the account will be created for viz, if not enough, then for delegated shares. If the number of delegated shares is also insufficient, the account will not be created.

The registrar will be able to revoke delegated tokens by default after 28 days or after another period specified by the delegates(./witnesses.md#create-account-delegation-time).

If the registrar tries to revoke shares earlier than the specified period, they will be debited from the new account, but will be frozen until 28 days have passed since the registration. In case of freezing, neither the registrar nor the created account can use the share tokens.

### Register with bearer check

* Read more about checks in the section: [Bearer Checks](./check.md). *

Another convenient way to create a new account is to pay for registration using a check. For this, a future VIZ participant must purchase (buy or receive as a gift) a VIZ check for an amount not less than [indicated by the delegates](./witnesses.md#account-creation-fee) as a fee for creating an account.

The owner of the check, using the application or directly sends a special transaction (invite_registration) to the blockchain, indicating the private key of the check and the public future master key of the account. This transaction will register a new account by spending tokens from the check. All tokens from the check will be converted into shares of the new account.

If a person already has an account, then he can sign the transaction using his account and its private active key. If he does not have an account, he can send a transaction using the @invite account, which belongs to the blockchain, signing it with the private key 5KcfoRuDfkhrLCxVcE9x51J6KN9aM9fpb78tLrvvFckxVV6FyFW.

## Anonymous accounts

To create anonymous accounts, a special @anonymous account was built into the blockchain. To register an account, it is necessary to transfer to it viz tokens with a volume of no less than [indicated by the delegates](./witnesses.md#account_creation_fee), attach a note with the name of the new account and its public key to the transfer (the private key must be kept in a safe place and no one do not transmit). The note must match the format

`` login: key``,

where `` login '' is the name of the new account, `` key '' is its key. The public key, in turn, will be registered as the main, active, regular and communicative.

Another way to create an anonymous account is to specify only the public key for the new account, without a colon (``: ''). When @anonymous receives the transfer, it will create a new account using the @ nX.anonymous scheme, where X is the anonymous account number. The @anonymous number is assigned by itself, each time adding one to the number of already created anonymous accounts.

Anonymous accounts have the same rights as other accounts. And with popular gateways that allow you to transfer funds to other users through their accounts, it will be difficult to identify the owners of anonymous accounts, provided they took precautions to hide their identity. Such gateways can be, for example, exchanges or exchangers.

## Energy

Each account on the blockchain has a supply of energy, which is measured as a percentage. The maximum energy value is 100%, the minimum can be -100%, that is, less than 0%.

Energy is needed to send [awards](./economy.md#awards) to other users. If there is not enough energy, then the account will not be able to reward the participant with the required amount of tokens, and if the energy is equal to or less than 0%, then the account will not be able to send the reward at all. However, he will still be able to perform other operations on the blockchain, for example, transfer tokens between accounts, vote for delegates and do whatever he can with 100% energy. Read more about the awards in the [Activity awards] section (./ecomomy.md#award).

Energy is wasted in two cases. First, when the account rewards the participant. In this case, the user himself indicates how much energy he wants to spend, and the size of the reward depends on this amount. Second, when the account [delegates shares](./economy.md#shares) to another user.

Delegation occurs in two cases: when registering an account through delegation and when delegating a share to an existing account. With any delegation option, the initiator cannot specify the amount of energy that will be spent, but it is directly proportional to the number of shares that will be sent (the more shares are delegated, the more energy will be spent).

The blockchain calculates the amount of energy that will be spent using the formula delegated shares / effective shares * 100%.

Energy is expended instantly, but recovered slowly: 20% of the maximum in 24 hours, 1% in 1 hour 12 minutes (that is, only 0.01% of the energy is restored in 1 second).

## Account data

This section describes the parameters that accounts contain in the form in which the blockchain stores them. This section will be useful for developers who want to have a better understanding of accounts. All parameters are read-only as a snapshot of the account state from the moment the last block entered the blockchain.

To get started, check out the table of information types that blockchain uses:

| Type         | Example               | Range                | Description                                                     |
| ------------ | --------------------- | -------------------- | ------------------------------------------------------------ |
| VIZ asset    | "1.000 VIZ"           | from 0.001 VIZ       | Number of [liquid tokens](./economy.md#viz-token). A string with a decimal number with no more than 3 digits after a period and a mandatory VIZ postscript separated by a space. <br> Example: "1.123 VIZ" |
| SHARES актив | "1.000000 SHARES"     | from 0.000001 SHARES | Number of [share tokens](./economy.md#shares). A string with a decimal number with no more than 6 digits after the period and the obligatory SHARES postscript separated by a space. <br> Example: "1.123456 SHARES" |
| µShares      | 1000000               | from 1               | Number of micro [share tokens](./economy.md#shares). 1 = 0.000001 SHARES; 1000000 = 1.000000 SHARES. Integer.  |
| Percentage   | 1000                  | from 0 до 10000      | Percentage in whole number format. 0.01% = 1; 1% = 100; 100% = 10000; |
| Integer      | 1                     |                      | Integer. Numbers that are too large can be represented as a string. |
| Byte         | 1                     |                      | The number of bytes in general numeric format. Values ​​that are too large are written as strings. |
| μByte        |                       |                      | The number of microbytes in a whole number format. Too large values ​​are written as strings. <br /> 1 Byte = 1,000,000 μBytes |
| Time         | "2018-09-30T05:58:57" |                      | Time string type in the format "YYYY-MM-DDThh:mm:ss".        |
| JSON         | "{"param1":"value"}"  |                      | JSON string                                                  |
| Account      | "example"             |                      | Account name in string format.                               |
| KEy          | "VIZ8XwKjAkG5...."    |                      | Public key in string format with "VIZ" prefix.               |

### average_bandwidth

Added: 1.0.0

[Format](#props-desc-table): μByte

The value of the [moving average of the spent bandwidth](./bandwidth.md#viz) at the time of the last transaction.

### lifetime_bandwidth

Added: 1.0.0

[Format](#props-desc-table): μByte

The number of μBytes that the account has used since its creation.

### balance

Added: 1.0.0

[Format](#props-desc-table): VIZ asset

The number of viz on the account balance.

### vesting_shares

Added: 1.0.0

[Format](#props-desc-table): SHARES asset

The number of [clear Shares](./economy.md#clear-shares) of the account.

### delegated_vesting_shares

Added: 1.0.0

[Format](#props-desc-table): SHARES asset

The number of Shares that the account has delegated to other users.

### received_vesting_shares

Added: 1.0.0

[Format](#props-desc-table): SHARES asset

The number of Shares obtained by [delegation](./economy.md#shares).

### next_vesting_withdrawal

Added: 1.0.0

[Format](#props-desc-table): Time

The time when the next write-off to [vesting_withdraw_rate](#vesting-withdraw-rate) will occur with [share reduction enabled](./economy.md#shares-reduction).

### to_withdraw

Added: 1.0.0

[Format](#props-desc-table): µShares

The number of Shares that the account has requested for [share reduction](./economy.md#shares-reduction).

### withdraw_routes

Added: 1.0.0

[Format](#props-desc-table): µShares

The number of accounts with which an account can share Shares during [share reduction](./economy.md#shares-reduction). The maximum number is 10.

### vesting_withdraw_rate

Added: 1.0.0

[Format](#props-desc-table): SHARES asset

The number of Shares that will be debited every day when [share reduction is enabled](./economy.md#shares-reduction).

### benefactor_awards

Added: 2.0.0

[Format](#props-desc-table): µShares

The amount of µShares (µShares) that the account has received as [beneficiary payments from awards](./economy.htm#awards) for all time.

### receiver_awards

Added: 2.0.0

[Format](#props-desc-table): µShares

The number of µShares (µShares) that the account has received as [awards](./economy.md#awards) for the entire time.

### vote_count

Added: 1.0.0

[Format](#props-desc-table): Integer

The number of [awards](./economy.md#awards) that the account submitted. Up to 4 hard forks, this parameter showed the number of votes that the account gave to different posts.

### created

Added: 1.0.0

[Format](#props-desc-table): Time

The time when the account was created.

### custom_sequence

Added: 2.0.0

[Format](#props-desc-table): Number

The number of custom transactions that the user has sent since the 4th hard fork.

### custom_sequence_block_num

Added: 2.0.0

[Format](#props-desc-table): Number

The number of the last block in which the last custom transaction of the account was placed.

### energy

Added: 1.0.0

[Format](#props-desc-table): Percentage

The amount of energy that the account has left since the last transaction was sent. This parameter will update when the user submits a new transaction. The time it took to restore it will also be taken into account. The parameter is updated in such a way so as not to waste delegates' resources on unnecessary calculations.

### id

Added: 1.0.0

[Format](#props-desc-table): Integer

Digital unique identifier of the user in the system.

### name

Added: 1.0.0

[Format](#props-desc-table): Account

Account name.

### json_metadata

Added: 1.0.0

[Format](#props-desc-table): JSON

Account metadata in JSON format. They can, for example, store information about the user's profile: name, surname, website, social networks, gender, position, place of work. The @anonymous account stores the number of anonymous accounts instead of a JSON string. The parameter can also be an empty string.

### last_account_recovery

Added: 1.0.0

[Format](#props-desc-table): Time

The time when the account last restored the keys to its account. The account can be restored only by the account that is registered in [recovery_account](#recovery_account)

### recovery_account

Added: 1.0.0

[Format](#props-desc-table): String

The name of the account that can restore the user account. If the field is empty, then no one can restore access to your account.

### referrer

Added: 1.0.0

[Format](#props-desc-table): Account

The name of the account that created the new account. The parameter is set during account registration and cannot be changed anymore. When registering via an invite code, the parameter value will be equal to the name of the account that created the invite code. For other registration methods, the value can be left blank.

### last_account_update

Added: 1.0.0

[Format](#props-desc-table): Time

The time the account last updated keys, roles, or [json_metadata](#json_metadata).

### last_owner_update

Added: 1.0.0

[Format](#props-desc-table): Time

The time the account last updated master keys or roles. An account can renew master keys and roles only once per hour.

### last_owner_update

Added: 1.0.0

[Format](#props-desc-table): Time

The time when the account last updated the master key. The account can renew the master key only once per hour.

### witness_votes

Added: 1.0.0

[Format](#props-desc-table): Array of accounts

List of delegates voted for by the user.

### witnesses_voted_for

Added: 1.0.0

[Format](#props-desc-table): µShares

The number of delegates that the account has voted for.

### witnesses_vote_weight

Added: 2.0.0

[Format](#props-desc-table): µShares

The number of votes given by the user for each delegate. Calculated by the formula: `` (net s = Shares + Shares of the proxy account) / witnesses_voted_for``.

### proxied_vsf_votes

Added: 1.0.0

[Format](#props-desc-table): A µShares array of 4 elements

An array of 4 elements, each of which displays the number of shares that other accounts or [proxy accounts](./witnesses.md#vote) have entrusted to the account. The first element shows the number of net shares of regular accounts, the other three - the number of net shares of proxy accounts. A maximum of three other proxy accounts can be linked to a proxy account.

### proxy

Added: 1.0.0

[Format](#props-desc-table): Account

The name of the proxy account to which the user has entrusted their delegate votes.

### master_authority

Added: 1.0.0

[Format](#props-desc-table): Array

An array containing an array of master keys and an array of accounts associated with the main role.

[Contains account_auths](#account-auths) and [key_auths](#key-auths).

### active_authority

Added: 1.0.0

[Format](#props-desc-table): Array

An array containing an array of active keys and an array of accounts associated with the active role.

[Contains account_auths](#account-auths) and [key_auths](#key-auths).

### regular_authority

Added: 1.0.0

[Format](#props-desc-table): Array

An array containing an array of regular keys and an array of accounts associated with the regular role.

[Contains account_auths](#account-auths) and [key_auths](#key-auths).

------

account_auths and key_auths are included in the * _authority parameters.

### account_auths

Added: 1.0.0

[Format](#props-desc-table): Array of account arrays and their weights.

List of accounts associated with the role and their weights.

Example: account_auths: [['example', 20], ['owner', 50]]

### key_auths

Added: 1.0.0

[Format](#props-desc-table): An array of arrays of keys and their weights.

List of keys and their weights.

Example: key_auths: [['VIZ6cMf37KNdYiqXNfaCf7VFQDuPUWE6z5dw9LYLbSSGg5kAN1RMi', 20], ['VIZ6cMf38KNeYiqXNfsCf7VFQSSDuPUUEk6z1dw]

-----

### memo_key

Added: 1.0.0

[Format](#props-desc-table): Key

Communicative account key

### awarded_rshares

Deprecated: 2.0.0

Added: 1.0.0

[Format](#props-desc-table): µShares

The amount of [rShares](./economy.md#rshares) that could participate in the [competition pool](./economy.md#rshares-pool) without energy costs up to 4 hard forks. Obsolete due to a change in the economic model - rejection of positioning as a blogging platform.

### curation_rewards

Deprecated: 2.0.0

Added: 1.0.0

[Format](#props-desc-table): µShares

The number of µShares (µShares) that the account received as beneficiary payments from supervised posts up to 4 hard forks. Obsolete due to a change in the economic model - rejection of positioning as a blogging platform.

### posting_rewards

Deprecated: 2.0.0

Added: 1.0.0

[Format](#props-desc-table): µShares

The amount of µShares (µShares) that the account received for its posts up to 4 hard forks. Obsolete due to a change in the economic model - abandoning positioning as a blogging platform.

### last_post

Deprecated: 2.0.0

Added: 1.0.0

[Format](#props-desc-table): Time

The time the last post or comment was posted. Obsolete due to a change in the economic model - rejection of positioning as a blogging platform.

### last_root_post

Deprecated: 2.0.0

Added: 1.0.0

[Format](#props-desc-table): Time

The time the last post was posted. Obsolete due to a change in the economic model - rejection of positioning as a blogging platform.

### last_vote_time

Deprecated: 2.0.0

Added: 1.0.0

[Format](#props-desc-table): Time

Time of voting for the last post. Obsolete due to a change in the economic model - abandoning positioning as a blogging platform.

### content_count

Deprecated: 2.0.0

Added: 1.0.0

[Format](#props-desc-table): Integer

The number of posts by the user. Obsolete due to a change in the economic model - rejection of positioning as a blogging platform.

### subcontent_count

Deprecated: 2.0.0

Added: 1.0.0

[Format](#props-desc-table): Integer

The number of user comments. Obsolete due to a change in the economic model - rejection of positioning as a blogging platform.