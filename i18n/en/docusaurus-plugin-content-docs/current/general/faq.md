---
id: faq
title: Frequently Asked Questions (FAQ)
sidebar_label: FAQ
---

<!--
This document is divided into three main topics:

- [Technical](faq-technical) for those related to application development on Nuchain.
- [Network Maintainer](faq-network-maintainer) for those related to network maintenance of Nuchain such as a validator and nominee mechanism.
- [General](faq-general) for questions related to Nuchain in general. -->

## How to become a validator?

Read: [how to become a validator](../learn/become-validator.md)

## Why is my validator on the waiting list all the time?

This relates to the maximum number of validator on Nuchain which can be seen in the **Staking**
section > **Staking overview**

![maximum validator](https://i.imgur.com/8snPCSR.png)

If the number of validators has reached the maximum limit, the system will perform a mechanism of
election to determine who is eligible to enter the ranks of validators. The eligiblity is determined
by several things:

1. Availability of validator engine which is always active/online. If the engine is in off position
   or being off frequently, it will rarely be selected.
2. The number of guaranteed _stakes_. If the number of guaranteed _stakes_ is higher, then the
   probability of being selected as a validator is also higher

## What is the minimum stake to always be selected as a validator?

There is no minimum stake. But if the maximum number of validators has been reached, the candidate
validator needs need a _stake_ greater than the current smallest validator _stake_ to be able to
replace it. To see what is the smallest _stake_ value in the current validator, see **Staking**
section > **Targets**:

![Minimum average nuchain stake](https://i.imgur.com/OTA9AfB.png)

## When is the validator selected?

The validator is selected by the system at the end of each session (4 hours).

## I have become a validator but after so many days not getting _rewards_?

There are several possibilities:

1. **Not selected** - make sure your validator has been in the list of active validators. You can
   see it [in the staking section of the dashboard](https://dashboard.nuchain.network/#/staking). If
   you can not find your validator in the list, your validator might be in the _waiting_ section
   which means that it hasn't been selected by the system.
2. **Unpaid** - validator earns _rewards_ at the end of each era, where users need to do _payout_ to
   cash out their ARA. You can read the _payout_ method
   [here](https://github.com/nusantarachain/nuchain/wiki/Payout).
3. **Machine off** - the engine used for the validator is off or inactive so it doesn't create any
   blocks at all.
4. **Not yet connected** - the validator engine has not been connected using the _session key_. Read
   [how to become a validator](../learn/become-validator.md) to see how to connect it.

## Does Nuchain support Smart Contracts?

Yes, Nuchain supports Smart Contracts, you can see an example of the Smart Contract application
[here](https://github.com/nusantarachain/onchain-apps).

## Is there a Faucet program?

Yes, there is a Faucet program from the community:
[https://faucet.nuchain.id](https://faucet.nuchain.id/).

## What is Era?

An era is a time loop that consists of several sessions. In Nuchain an era is equivalent to 24
hours. The era ease the system in calculating _rewards_ and make scheduled changes.

## When I become an active validator and my validator computer shuts down, is there any effect?

Yes. If the computer that is used as the validator off or creates a _malicious block_, there is a
possibility that the system will give punishment by slashing the **stake** that you guarantee
(**bond**). The value that is cut is dynamic, depending on how dangerous an activity is on the
network.

## What does `sync` mean when running node for the first time?

When you run _nuchain node_ for the first time, _node_ will synchronize to get all data blocks on
the network. This process takes a long time when there are too many blocks. To speed up the
synchronization process, you can download the following _presync_ data:

- [Nuchain Data April 1, 2021 full RocksDB](http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-snapshot-20210401-full-rocks.7z)

Extract using [7zip](https://www.7-zip.org/) and point _Nuchain node_ to the data using the
`--base-path` parameter.
