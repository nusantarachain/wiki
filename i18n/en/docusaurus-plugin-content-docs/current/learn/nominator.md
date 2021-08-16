---
id: nominator
title: Nominator
sidebar_label: Nominator
---

Nominees are individuals who wish to participate in securing the network without being a validator.
Unlike the validator, the nominee does not require a machine to perform block validation. Nominees
can use their tokens to help strengthen other validators, so that the validators have more chance to
be selected and enter the list of validators. As a return, the nominee will receive ARA tokens
according to the profit sharing percentage set by the validator.

## How to Become a Nominee

To be a nominee you need to [create an account](account.md) first.

Go to [Nuchain Dashboard](https://dashboard.nuchain.network). Select the `Network` menu >
`Staking` > `Account actions` then click the `Nominator` . button

There are several inputs that need to be filled in the nominee window.

![Nominee](https://i.imgur.com/z3ZlnIg.png)

- **stash account** - the account that will be used as _holding_ of the nomination process. This
  account is not used for daily transactions but only to handle the nomination process. You can use
  this account to increase the number of _stake_ from each _rewards_ earned.
- **controller account** - the account that controls the _Stash Account_. This account may be the
  same account that will be used as the _stash account_, but it is recommended that you have
  different account for those two purposes.
- **value bonded** - the number of ARA to be staked. Do not enter all the ARA you have, especially
  if the stash and controller account are the same, then you may not be able to conduct _payout_ to
  withdraw rewards in the future. Keep in mind that you need ARA as _fee_ to withdraw _rewards_.
- **on-chain bonding duration** - _stake_ waiting period will be locked and cannot be used. If you
  want to _unstake_, the realization will be done after the waiting period ends.
- **payment destination** - the account that will be used as the recipient of **rewards**.

![payment destination](https://i.imgur.com/YSW02Zs.png)

**DESCRIPTION:**

- **Stash account (increase the amount at stake)** - every **rewards** earned will be transferred to
  the _stash_ account and will increase the amount of _stake_ automatically (locked).
- **Stash account (do not increase the amount at stake)** - _rewards_ will be transferred to _stash_
  account but it will not increase the amount of _stake_; it is unlocked and therefore it can be
  used.
- **Controller account** - _rewards_ will be transferred to _controller_ account and not increase
  its _stake_ value.
- **Specified payment account** - _rewards_ will be transferred to a specific account selected by
  you other than _stash_ and _controller_.

Then click **Next** and the following window will appear:

![Nominator select candidate](https://i.imgur.com/YkLLjtG.png)

In this section you need to choose which validator you will stake the ARA (Can be more than one
account). Choose the best validator because doing _stake_ ARA has the same risk as validator;
validator engine that is not reliable or often shuts down will affect your _rewards_. Choose a
validator that sets a low commission value for optimal _rewards_.

After you finish selecting, click **Bond & Nominate**.

You will enter the _Waiting list_ in which your account will be processed as a nominee within 24
hours (1 era).
