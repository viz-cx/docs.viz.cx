# Bandwidth

## Definition

Throughput is the maximum size of a transaction in bytes that
the user can send to the blockchain at a given time. Throughput volume
the ability depends on the number of [Shares](./economy.md#shares) in the user's account.

## Description

Most blockchain projects force users to pay for each transaction in order to limit spam and make it economically unprofitable. But VIZ doesn't force users to pay, it uses a [dynamic-reserve] system. With this model, the blockchain automatically selects the reservation ratio for different loads. Every time there is a spike in activity, the blockchain dramatically lowers the bandwidth of each account. When the spike is over and there is more space in the bandwidth, the blockchain slowly increases the bandwidth of each user.

Every time a user signs a transaction, it counts towards their moving average throughput. If the sliding has crossed the limit, then the blockchain will not allow sending this transaction. In this case, the transaction should be postponed until the moving average drops below the threshold.

Since the information from the user is placed in one block, and not split into several, it is impossible to increase the data transfer time, as it happens in classical information transmission systems (when the data transfer time depends on the bandwidth), therefore VIZ simply prohibits sending a transaction.

It turns out that the user does not immediately experience inconvenience, but first performs an operation and then encounters problems. It also means that the user cannot increase the rate at which a transaction enters the blockchain, but can increase the maximum allowable transaction size for his account if he acquires an additional share in the network.

![](./img/bandwidth.png)

This model can be difficult to understand the first time. Let's look at an analogy.

Take an empty can. Its volume is the size of the reserved bandwidth. Let's fill the jar half with water - this is how much it takes one transaction. Now we will put a lid on the jar with a small hole. Let's turn the can over. After a while, half of the water will flow out of it. Flip the jar back and remove the lid. Pour more water with a volume equal to half the volume of the can. We have 1/4 of free space left. Now, if we want to pour more water, the volume of which is equal to half the volume of the can, we need to pour at least 1/4 of the volume of the can. But we cannot pour out this volume at once, for this we need to put on a lid with a hole and turn the can over. Thus, you can immediately fill the required volume of the jar with water, but to free up more space in it, you will have to wait some time. So it is with transactions. It is possible to quickly send a transaction to the blockchain, but sending another one may take time.

## What is the difference between partial and full reservation

Let's pretend that VIZ uses a full redundancy system. This means that each user can use part of the bandwidth in proportion to his share in the network. But it is impossible to use the blockchain at the same time, in addition, many do not need to occupy the entire dedicated bandwidth. Consequently, part of the network will be idle, and it will not be able to realize its full potential.

With fractional reservations, each individual user can use more bandwidth when there are no active transactions on the network and less during peak loads. At the same time, the blockchain will use full redundancy under very high loads. The main difficulty of such a model is the choice of the redundancy ratio for different loads. While full redundancy can be set to a factor of 1, there can be many solutions for other situations. The next chapter describes how bandwidth allocation works in VIZ.

## How bandwidth is calculated in VIZ

Before reading further, take a look at the legend table below.

| Symbol               | Measurement unit  | Description                                                     |
| -------------------- | ----------------- | ------------------------------------------------------------ |
| Bnew                 | byte              | The moving average throughput that will be spent on this transaction |
| Bold                 | byte              | The value for the moving average of the already spent bandwidth |
| N                    | byte              | New transaction size                                      |
| W                    | seconds           | Number of seconds in a week                                   |
| T                    | seconds           | Difference between the time when the last transaction was sent and at the moment |
| R                    | percentage (%)    | The percentage of allocated bandwidth for accounts with low network share. This parameter is set by witnesses |
| C                    | integer           | The number of active accounts (sent at least one transaction in 30 days) with a small share of the network |
| Smax                 | Shares            | Share volume of a specific account                              |
| S                    | Shares            | The volume of the share of a particular account, taking into account the percentage allocated for accounts with a small share of the network |
| M                    | Shares            | Share of all accounts                                    |
| G                    | byte              | The maximum block size. This parameter is set by witnesses |
| K                    | integer           | Bandwidth redundancy ratio from 1 to 2000 |
| L                    | integer           | The number of blocks to be generated per week     |
| E                    | byte              | ``G * L * K`` – maximum throughput at a given load |

** Note: the value of R is set by witnesses, they also determine how much of a share is considered small. In addition, witnesses can prohibit members with a small stake from making transactions. **

For each specific account, the bandwidth limit is set to `` (S / M) * E '', that is, in proportion to its share in the network. Moreover, `` S = Smax * (100% - R) '', if `` Smax '' is considered normal, and `` S = M * R / C '' for accounts with a small share. This means that some of the bandwidth is taken away from accounts with sufficient stack and distributed among accounts with a small share in the network. If `` Bnew '' exceeds the reserved value, then the account will not be able to send a new transaction. In turn, Bnew is calculated using the following formula:

,,, Bnew = MAX (0, (W - T) * Bold / W) + N ,,,.

It follows from the formula that the more time has passed since the last transaction, the less will be `` Bnew, '' and, if the last transaction took place seven days ago, then `` MAX (0, (W - T) * Bold / W) = 0 ,,, and `` Bnew = N ''.

![](./img/bandwidth_viz.png)

### Margin for limitless transactions

Many transactions in VIZ are limited in the amount of information that can be accommodated in them. For example, when sending a transfer, you can specify only the number of tokens and a note, the size of which should not exceed 2 KB. But there is another type of transaction, for example, a custom transaction, in which basic information can be recorded by its sender in free form. The size of the data in such transactions is almost unlimited.

For such unlimited transactions, the system can make a markup for a certain multiplier ``X`` ([it all depends on the decision of witnesses](./witnesses.md#data_operations_cost_additional_bandwidth)), then the formula for ``Bnew`` will look like this:

``Bnew = MAX (0, (W - T) * Bold / W) + N * X``

## How VIZ Determines Reservation Ratio

Every time the moving average block size is greater than 25% of the maximum block size ``G``, the blockchain reduces the `` K`` in half. When the load drops, the blockchain increases ``K`` again, adding one every minute. Reducing the ``K`` in half ensures that accounts that used less than 50% of the previous reserved bandwidth will not be affected unless the load is caused by very large stack holders.

The formula for calculating the new moving average value for the block size:

``Anew = (99 * Aold + Q) / 100``

| Symbol               | Measurement unit  | Description                                             |
| -------------------- | ----------------- | ------------------------------------------------------- |
| Anew                 | byte              | New moving average value for block size                 |
| Aold                 | byte              | The last moving average value for the block size        |
| Q                    | byte              | New block size                                          |

**Note: If the reservation ratio consistently falls below 100, then witnesses should consider increasing the network bandwidth, for example, increasing the maximum block size.**
