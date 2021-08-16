---
en: learn-extrinsic
title: Extrinsic
sidebar_label: Extrinsic
---

Extrinsic is a term for executing transactions or operations on the network that are _mutable_,
meaning that operations will affect state/data on the network.

There are two ways to access extrinsic:

## Using Dashboard

The easiest way is to use [Nuchain dashboard](https://dashboard.nuchain.network). This method is
usually used for testing or exploration only. The practical way is the programmatic way, see the
section [Programmatic](#programmatic).

You can access extrinsic functions via [Nuchain dashboard](https://dashboard.nuchain.network) >
**Extrinsic**: menu

![Extrinsic Menu](/img/extrinsics-menu.png)

On the **Extrinsic** page you will find an interface that makes it easy for you to call function
based on the modules available in Nuchain.

![Extrinsic Submission](/img/extrinsic-submission.png)

The above image is an example of transferring an ARA to another account via an extrinsic function
using the `balances` module with the function name `transfer`.

## Programmatic

Nuchain provides a [javascript library](https://github.com/nusantarachain/api) to make it easier to
access extrinsic programmatically.

Example of doing transfer programmatically:

```javascript
const api = await ApiPromise.create({
  provider: new WsProvider(NUCHAIN_NODE_ADDRESS),
});

// make extrinsic function calls
// in the `balances` module of the `transfer` function.
api.tx.balances.transfer(recipient, 100).signAndSend(sender, ({ status, events }) => {
  if (status.isInBlock || status.isFinalized) {
    console.log("Transfer successful!");
  }
});
```
