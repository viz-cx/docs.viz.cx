# VIZ checks

A bearer check in VIZ is a pair of keys (public and private), which is associated with a number of [viz tokens](./economy.md#viz-token). Using the public key, you can make sure that the check funds have not been used, and with the private key, you can receive funds to the account.

If we draw an analogy with the banking sphere, then the concept closest to this system will be a bearer's check, that is, a security that gives the owner the right to receive the amount specified in it from the bank. But there is no bank or securities in the blockchain, so a check is a special kind of record.

A VIZ member can write a check for any number of [liquid tokens](./economy.md#viz-token) in his account. These funds are blocked by the blockchain at the time the check is issued and transferred to the recipient's account at the moment the check is presented to the blockchain. The recipient can be any [account](./accounts.md), including the one that wrote the check (for example, if the owner of the check changed his mind to transfer it).

To create a check, the user has to send a special transaction (create_invite). In this transaction, you must specify your account name as the initiator, the public key and the amount of tokens that the owner of the check's private key will receive.

The public key is generated in the same way as for [account](./accounts.md), that is, based on elliptic cryptography using the [secp256k1](https://en.bitcoin.it/wiki/Secp256k1) curve. As soon as the transaction enters the blockchain, funds in the specified amount will be frozen on the initiator's account.

To transfer funds from a check to any other account, the owner of the private key needs to send a transaction (claim_invite_balance), in which the private key and the recipient's account must be specified. If the private key matches the public one, and the recipient account exists, then the entire amount of liquid tokens specified in the check will be transferred to the specified account.

In addition to a simple transfer, using checks, you can create new accounts by sending a registration transaction via invite (invite_registration). Read more about registration via invites in the [accounts](./accounts.md#invite-reg) section.

## 1 example of using checks. Gift

A man named Bob lives in a certain city. His friend Max has his birthday today. Bob decided to give Max some viz tokens, but he wants to do it beautifully. If Bob transfers the tokens before he comes to visit, Max will find out, and the surprise will spoil. If he wants to transfer tokens in the presence of Max, then who knows what an unpleasant situation will happen - perhaps at this moment Bob will not be able to send a transaction to the blockchain due to the slow Internet. Then Bob decided to act differently: he will generate a check, print it in the form of a QR code and give it to Max in a beautiful postcard.

## 2 example of using invite codes. Registration

Alice decided to register her work colleague Max in DAO VIZ, but Max still does not know what kind of login he wants. Therefore, in order not to sit at the computer for a long time, Alice decided to create a check and give it to Max, so that he would register an account for himself when he came home.