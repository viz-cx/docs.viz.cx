# What is VIZ blockchain

VIZ is a DAC (Decentralized Autonomous Community), this is to say a blockchain system built with Graphene technology (used in BitShares, Steem, partly in EOS). One of its main distinctive features is the principle of equitable participation in the work of the system (fair consensus, fair economy, fair DAC equity management).

VIZ is a blockchain platform for social applications, users of which can reward each other with tokens from the issue (ie continuously “printed” blockchain tokens) or their direct transfer. Applications are responsible for the logic of interactions between users, while the blockchain ensures transactions and reliable immutable storage of information.

VIZ consists of two main technical components: a basic consensus based on [Fair DPoS](./glossary.md#fair-dpos) and an application interface (API). The consensus algorithm ensures that the same transactions are recorded in the same order on all nodes (computers with blockchain software installed), and also provides basic blockchain actions: creating accounts, distributing emission, paying users for their actions, and some others. An API is a collection of plugins that are written in the C ++ language and access to these plugins through web interfaces.

![](./img/viz_architecture.png)

## How VIZ differs from Ethereum, Bitcoin and other similar projects

Unlike many crypto projects like Ethereum or Bitcoin, which use PoW or PoS algorithms, VIZ uses a more democratic algorithm [Fair DPoS](./glossary.md#fair-dpos). This means that the main role in the network is played not by miners, but by investors who vote for the creators of new blocks - delegates. Delegates guarantee the stable operation of the blockchain and receive payments from the issue for this. However, the voting system is designed so that the owners of the [larger share](./glossary.md#share-token) of the network have more weight. In addition, only 21 [delegates](./glossary#witnesses) (ten with the most votes and eleven of the others) are allowed to create new blocks and manage network parameters.

## How VIZ differs from BitShares

VIZ, like BitShares, is based on Graphene. Both projects use [DPoS](./glossary.md#dpos) to confirm transactions. But BitShares was conceived as a financial platform where you can create and trade your own tokens. VIZ has a different idea - it is a platform for social applications.

## How VIZ differs from Golos and Steem

Golos and Steem, like VIZ, are built for social apps. However, these two projects were conceived as blockchain blogging platforms, where curators evaluate the quality of posts and decide how much the author will receive. VIZ, on the other hand, allows you to receive rewards for any action, even outside the blockchain. For example, you could create an app that rewards people who care about pandas.

## How VIZ differs from EOS

EOS is a blockchain for decentralized applications that supports smart contracts. It is a kind of operating system that runs on many computers at the same time. VIZ does not support smart contracts, it only provides the basic mechanics with which developers create social applications where users can reward each other. That is, VIZ is more suitable for centralized solutions or third-party blockchain projects that will interact with it.

On EOS, you can implement everything that is in VIZ. The main difference is that an EOS application stores its code on many computers and runs on them. A VIZ-based application uses the blockchain only as a database with a mechanism for rewards for different actions. The choice between decentralization and centralization depends on the purpose of the applications. The developer must decide for himself what is right for his application.

## Who owns VIZ

VIZ has no owners. Each member of the network, being the owner of its share, decides for himself in which direction the project should develop, and contributes to this development as much as possible.

## Who maintains the VIZ code

The code that VIZ runs on is licensed under the MIT license. This means that anyone can copy the code, make changes to the copy, and run their own blockchains. Changes to the code of the VIZ blockchain itself are proposed by any developers and are accepted or rejected by delegates.

## Who launched the VIZ blockchain

Nobody knows who started this network.