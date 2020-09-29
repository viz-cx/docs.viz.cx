# Multilevel paid subscriptions

Paid subscriptions are a way of automatically debiting funds at regular intervals to pay for any services. VIZ subscriptions can have multiple levels. The higher the serial number of the level, the more expensive it is.

Any user can setup a multilevel subscription service for their [account](./accounts.md). One account can install only one subscription service, but at the same time it can act as a subscriber of several services at once.

To setup a subscription, you must send a transaction (set_paid_subscription). In it, you need to specify a link to a web resource with information about the subscription, your account, the maximum number of levels, the price of one level and the frequency with which liquid tokens will be debited from subscribers.

After that, any user will be able to subscribe to this account for a fee, specifying the desired level, but not higher than the maximum number of levels.

The price of a specific subscription level will be as many times higher than the first one, at what time the level number is more than one (for example, if the first level costs 10 viz, then the third level will cost 30 viz).

Optionally, the subscriber can specify whether the funds will be automatically debited at the end of each period, or they will be debited only once.

If the subscriber has less liquid tokens on his account than is required for subscription payments, then it will be canceled at the end of the old agreement, provided that automatic debiting of funds has been enabled.

## Changes to subscription terms

If the subscription publisher changes its terms and the subscriber has automatic debiting enabled, the blockchain will first determine whether the changes are positive or negative for the subscriber.

Positive changes include an increase in the period for writing off liquid tokens from a subscriber and a decrease in the price of the first level (and therefore all the others). All other changes are considered negative for the subscriber, so the subscription will be canceled as soon as the old agreement ends. If the changes are considered positive, then at the end of the old contract, the subscriber will be transferred to the new conditions.

## 1 example of using subscriptions

Masha recently opened her fitness club. She decided that it would be good if the club's visitors could sign up for the class. In addition, she decided that she would make three types of season tickets: regular, super and VIP.

To implement this scheme, she created an account in the VIZ DAO with the name @ mashas-club and implemented a three-level subscription model in it, indicating the price for the first level 100 viz and the frequency of payment once a month.

Thus, the visitors of the club have the opportunity to subscribe in the form of a subscription to the VIZ DAO, for this they only need to have an account in the system and a sufficient number of liquid tokens.

## 2 example of using subscriptions

The Charitable Foundation for Helping Cats invites VIZ members to make small daily payments to replenish the fund. To do this, he creates an @catsfund account and sets up a 100-level subscription with a base payment of 0.1 viz and a frequency of once a day.

Anyone can subscribe to payments to the fund by choosing a contribution depending on their desires and capabilities: from 0.1 viz to 10 viz per day.