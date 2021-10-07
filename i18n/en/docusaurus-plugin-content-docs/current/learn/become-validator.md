---
id: become-validator
title: Become Validator
sidebar_label: Become Validator
---

You must have a Nuchain account in order to become a validator. How to create an account can be
found [here](account.md).

## Installing Nuchain Node

You can install Nuchain node on your server/computer by compiling the source code from the `master`
_branch_ in [repository](https://github.com/nusantarachain/nuchain) or downloading the _pre-built
binary_ on the [releases] page (https://github.com/nusantarachain/nuchain/releases).

If you want to install from source code, please follow the steps
[install from source code](https://github.com/nusantarachain/nuchain/blob/master/README.md#from-source-code).

After you _download_ from the [releases](https://github.com/nusantarachain/nuchain/releases),
extract/unzip the zip file. Here is an example.

```bash
$ unzip nuchain-0.1.3-3cb5203af-linux.zip
```

Run:

```bash
$ ./nuchain --validator
```

**NOTE:** Run Nuchain as a service so that when the computer shuts down/restarts, Nuchain can run
again automatically.

The fastest way to run Nuchain node is to use [Docker](https://docker.com/), read how to use it
[here](docker.md).

## Connect

You need to link your account to the validator engine so that the Nuchain system knows where the
_rewards_ (as the results of the validator engine) will go. Here's how to connect a Nuchain account
with the validator engine:

1. Get the session key from the validator engine that is already running:

```bash
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http:// localhost:9933
```

The output you get is something like this:

```
{ "Jsonrpc": "2.0", "result": "0x2320085170b06281aedc2df4296d7b5042abcef201c57f2e55201f7aefc6af0c5ac19e74b674cb97913d54d63255dc18fbe88ad73392576130e00803c7082716147a5768a1c7f8708379649c0c9246b049699109c94b7d8957ebb813af62620464a70e69288323168afd69358746d684fc178eefac06aa9e94028a0f409a6d1a", "id": 1}
```

Copy the hex text in the _field_ _result_ starting with `0x...`. The text is the session key which
will be needed at the registration/submission stage to become a validator.

## Apply As Validator

To apply as a validator, go to [Nuchain Dashboard](https://nuchain.research.tech). Go to the
**Network** menu > **Staking** > **Account actions** then click the "**+Validator**" button:

![Nuchain Validator](https://i.imgur.com/Gr1SNgD.png)

Fill in the required data for the Staking process then click the **next** button.

_Paste_ the long hex text -- obtained from the previous step -- into the input _Keys from
rotateKeys_:

![Set Session Key](https://i.imgur.com/pqUCE6X.png)

_rewards commission percentage_ can be filled 100% to get all _rewards_ for yourself (excluding
_nominators_).

If you encounter any difficulties, please submit questions in the [Element]
group(https://app.element.io/#/room/!aYWUxhUvutqbMBQIsN:matrix.org) or
[Telegram](https://t.me/nusantarachain)

## Pruning

When you become a validator, you don't have to store all existing block data. It is possible for the
validator to store only the last few blocks of data so that its storage space is not highly
consumed. This can be done by using the _pruning_ feature. This feature allows the validator to run
the engine without having to store the entire block from the begining; the validator may store only
a few blocks based on the desired configuration. Activation of _pruning_ mode is enough by adding
the parameters `--unsafe-pruning` and `--pruning=[NUMBER-BLOCK]`. Example:

```bash
nuchain --validator --unsafe-pruning --pruning=1000 ...
```

The above example command will run the validator with _pruning_ 1000 or only keep the last 1000
blocks, the old blocks will be deleted.

While using Pruning makes storage power more efficient, saving all blocks is recommended. Saving the
entire block will maintain the _history_ of transactions across the network.

## Presync Data

When you become a new validator for the first time, the _node_ will synchronize. This process will
take quite a while when there are too many blocks. To speed up the sync process, you can download
the following _presync_ data:

- [Nuchain Data 7 Oct 2021 pruning 1000](http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-pruning-1000-snapshot-2021-10-07.7z)
  (2GB)
- [Nuchain Data 21 May 2021 pruning 1000](http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-snapshot-20210521-pruning1000-rocks.7z)
  (993M)
- [Nuchain Data 9 May 2021 full](http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-snapshot-2021-05-09.7z)
  (6GB)
- [Nuchain Data 14 April 2021 full](http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-snapshot-20210421-full-rocks.7z)
  (2GB)

Extract the file using [7zip](https://www.7-zip.org/) and point _Nuchain node_ to the data using the
`--base-path` parameter.
