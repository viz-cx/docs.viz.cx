# Economics and Management

In terms of (self) governance, VIZ aims to be a [decentralized autonomous society](./glossary.md#dao) (DAO, DAC, DAO). This means that anyone can buy a stake in the DAO and influence its management in accordance with that stake.

VIZ has no owners, no company or organization behind it. Participants own VIZ tokens (shares) and decide in which direction the project should develop. It is the owners of shares who solve VIZ problems, think over and propose changes to the code, select people who will keep the network operational, and make efforts to popularize VIZ.

VIZ participants can unite in groups to solve tasks assigned to themselves. Each participant is part of the VIZ community. In other words, VIZ is not just a decentralized organization, it is a decentralized [turquoise organization](./glossary.md#teal). And the goal of this organization is to create and improve the blockchain, on the basis of which social applications can be developed.

## Assets

Each VIZ user can own two types of assets: liquid viz tokens and shares tokens.

## Liquid token

Liquid token (viz) are blockchain tokens that the owner can freely move between accounts and convert into money, cryptocurrency and [share tokens](#shares) of the VIZ network. It makes sense to keep liquid tokens only for trading on the exchange or for transfers between accounts.

## Shared token shares

Equity tokens (shares) give their owner the right to elect witnesses, vote in the Committee and distribute [emission](#emission) among VIZ members. The influence of their holder on the processes in the DAO depends on the number of share tokens: the more shares, the higher the influence.

Shares cannot freely move from account to account, which means they cannot be traded on the exchange. However, one participant can delegate them (transfer part of their powers, "give to use") to another participant. When the second participant receives the funds delegated by the first participant, he will increase his influence by exactly the delegated number of shares, and the first will decrease his influence. At the same time, the shares received by delegation cannot be transferred to liquid viz. Delegated shares can be revoked at any time, they will be returned to the owner's account in a day.

## Convert tokens

Liquid tokens can be instantly exchanged for shares, but converting back will take 28 days (see [Shares reduction](#shares-reduction)). In this case, the conversion ratio in one direction and the other is 1: 1 (1 shares for 1 viz and vice versa).

## Decrease in share

The transfer from shares to viz is called “downgrading” and takes 28 days for the entire share. In one day, 1/28 of the total number of shares is exchanged. If a VIZ member wants to withdraw not all shares from the stake, the downgrade will be faster. For example, if there are 28000 shares in the share, and the participant wants to withdraw 1000 shares, the withdrawal will take place in 1 day.

## Net shares

Net shares are the number of share tokens in the account, excluding those transferred and received by delegation. That is, these are shares that the participant actually owns, which can be exchanged for viz. When voting for witnesses, only net equity tokens are counted.

## Effective shares

Effective shares are the number of net equity tokens plus those received by delegation and minus those delegated. The effective share is taken into account when distributing [emission](#emission) (awarding accounts) and when voting in the Committee.

## Emission

To ensure payment for useful actions on the network, the blockchain has an emission mechanism. The emission rate is set in the blockchain code and can only be changed by witnesses through the adoption of a code update (i.e. through a hard fork). At the start of the blockchain, the emission rate is set at 10% per year. Moreover, the absolute amount of the issue is recalculated once a year.

To ensure the stable operation of the network, the blockchain distributes emission with each new block, approximately every 3 seconds.

To calculate how many tokens are issued with each new block, you can use the following formula:

```Q = S * 10% / N```

where ``Q`` is the number of tokens that will be issued, ``S`` is the total number of all VIZ tokens that are in the system (including shares in terms of VIZ) at the time of the start of the annual emission, ``N`` is the number of generated blocks per year.

You can calculate ``N`` using the following formula:

``N = 365 * 24 * 60 * 60 / v``,

where ``v`` is the rate of generation of new blocks, equal to 3 seconds, and ``365 * 24 * 60 * 60`` is the number of seconds in one year (in VIZ, one year is equal to 365 days)

The issued tokens are distributed in several directions:

- Fund [awards](#awards) - 40% of the issue per year;
- Fund [committee](#committee) - 40% of the issue per year;
- Award [to witnesses](./witnesses.md) - 20% of the issue per year.

This distribution of emissions is [set by witnesses](./witnesses.md ## inflation-witness-percent) and is subject to change. No consensus is required for this, percentages are defined as the median value of the parameters set by witnesses, which is updated periodically.

## Account Rewards and Energy

Each account in the VIZ network can receive a reward or reward another user in the form of shares from [emission](#emission). These rewards are paid from the reward pool, which is replenished once per block in accordance with the [emission algorithm](#emission-directions). The size of the reward depends on the weight of the [rewarding account](#effective-shares) (the share of the account's shares in the total number of shares).

Some actions of an account on the blockchain (including rewarding) spend [energy](./accounts.md#energy) of the account. Moreover, the more energy an account spends on a reward, the more shares it can transfer to another account when rewarding.

The VIZ member decides for himself what percentage of energy to spend on a specific award, that is, how much shares to award the recipient. However, if a participant uses an application for an award, this application may limit the percentage of energy spent on the award.

Energy is restored over time. The maximum amount of account energy is 100%, within 24 hours 20% of the full energy is smoothly restored, that is, 1% of the full energy is restored in 1 hour 12 minutes.

Thus, the rewarding account is limited by energy resources, which means that it must efficiently use its potential so that there is enough energy for all the rewards.

Let's take a closer look at the awarding process.

Part of the blockchain emission goes to the reward pool. When calculating a specific reward, the pool collected over the past 5 days is taken into account.

Let's consider the reward from the issue by an example.

When Alice awards Bob, she tells the blockchain the number of her effective shares and the percentage of her account's energy going to the award.

The blockchain multiplies this data and gets a notional value, which is [called rshares](#rshares) (rewarding shares). After that Alice's rshares are divided by the sum of all rshares of all rewards for the last 5 days (including themselves). It turns out a certain coefficient, by which the [reward pool](#emission-directions) is multiplied. The resulting value is credited to Bob in shares.

*Example.*

* Alice has 10,000 effective shares. She rewards Bob with 15% energy. Accordingly, the rshares of this award = `` 10000 * 0.15 = 1500 ''.

* The reward pool is 27397 viz. Over the past 5 days, the participants awarded other participants a total of 4379876 rshares (taking into account this award to Alice Bobu). Divide 1500 by 4379876 and multiply by 27397. We get 9.382800 viz - this will be Bob's reward, which is credited to his share (in the form of shares). *

The rewarding account can indicate not only the recipient of the award, but also the beneficiaries. Then the award will be divided between the recipient and the beneficiaries in accordance with the specified percentages.

The rewarding account can specify as beneficiaries, for example, the people who helped the recipient of the reward to complete the task, or the application through which the reward is sent. The beneficiary can also be the sender of the award. However, he can also be the recipient of the award.

### Rewarding shares

Rewarding shares (rshares) are the number of shares a particular participant has designated to participate in the competition pool. The number of rshares depends on the effective shares of the rewarding participant and the energy that he is willing to spend on the reward. Rshares are calculated using the following formula:

``rshares = S * E%``

where ``S`` is the number of effective shares of the participant, ``E%`` is the amount of energy in percentage that he is willing to spend on the reward.

### Competition pool

Competition pool - the number [rshares](#rshares) of all participants. Rshares of a specific account participate in the competition pool only within 5 days after the payments for its reward have been made. This means that competition is becoming a thing of the past, that is, new rshares will compete with those for which awards have already been paid. In addition, if the competition pool is empty, then with the very first reward all tokens will go from the reward pool (but in practice such an event is extremely unlikely).

### Sleeping shares

Dormant shares are [shares](#shares) that do not participate in the distribution of payments from the reward pool. The more dormant shares, the less competition, therefore, the more reward each active participant can give.

## The committee

Any contributor who does something useful to the DAO can request compensation from the VIZ DAO for their activities or ask the DAO to sponsor their projects that can help develop the VIZ blockchain or applications. It could be blockchain code, a marketing campaign, a new website or app, documentation, a newbie help program, whatever comes to mind. The main thing is that it is useful for VIZ from a community point of view. Members of the community determine the degree of usefulness.

To apply, the participant must indicate the minimum and maximum amount of expected payments. It is also necessary to indicate the time (from 5 to 30 days) during which the application must be considered, that is, the period for which the community must make a decision.

In addition to filling out the formal parameters of the application, the participant should explain why the application was created and how its price was formed. When submitting an application, the participant can provide a link to the resource where such a justification is posted.

In addition, in the application, in addition to the creator's account, the recipient's account is registered. The recipient can be either the creator himself or a trusted person who has great authority on the platform. In other words, you can create an application with the receipt of funds through an intermediary (guarantor). The intermediary can, for example, guarantee that he will burn (or transfer to the committee's fund) all or part of the received tokens if the contractor does not fulfill any conditions.

During the time specified in the application, community members vote for or against the application, or may abstain from voting. The community member voter specifies the percentage of the maximum bid amount that he considers acceptable. This percentage can range from -100% to 100%. The voting takes into account the number of [effective-shares] of the voter. This means that accounts with higher weight have a greater impact on the outcome of the application than accounts with lower weight.

An application is considered accepted if, after the specified period, it receives at least 10% ([set by witnesses](./witnesses.md# committee-request-approve-min-percent)) from all possible votes, that is, from all shares in system (both votes for and against are taken into account). The blockchain then calculates the weighted average interest per request and the amount due. If the amount is greater than or equal to the minimum application amount, the application will be approved and the recipient will be paid the approved amount. Otherwise, the application will be rejected. Also, the application can be canceled by the creator himself if he changes his mind.

The formula for calculating the total amount of payments after the expiration of the voting period:

```SUM(Wn * Pn) / SUM(Wn) * M```,

where ``SUM`` is a function of the mathematical sum, ``Wn`` is the number of shares of participant ``n``, ``Pn`` is the percentage set by participant ``n``, ``M`` is the maximum the amount of [liquid tokens](#viz-token) specified by the creator of the application.
