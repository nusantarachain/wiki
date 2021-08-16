---
id: network
title: Nuchain Network
sidebar_label: Network
---

There are two networks in Nuchain: [Mainnet](../general/glossary.md#mainnet) and
[Testnet](../general/glossary.md#testnet).

Mainnet, which is the main network of Nuchain, has been working since February 2021 Testnet is the
network for trials. This network is usually used by developer for developing applications on the
Nuchain network.

Both Mainnet and Testnet come from same genesis

`0x789d2c1f6bd2948577506b4fa65d8f7c5b821eacc8612d0c86ff6a20994e5649`

## Daftar Nodes

Below is the lists of _nodes_ that are hosted by Rantai Nusantara Foundation.

#### Mainnet

- `sg.node.nuchain.network` (Singapore)
- `id.node.nuchain.network` (Indonesia)
- `in.node.nuchain.network` (India)
- `jp.node.nuchain.network` (Japan)
- `ca.node.nuchain.network` (Canada)
- `us.node.nuchain.network` (United States)

#### Testnet

- `testnet.nuchain.riset.tech` (Indonesia)

## Local

Nuchain also runs in the local network without need to connect to the Mainnet and Testnet. The local
network is helpful for testing isolated systems and testing account preset that has tokens.

To run Nuchain in local network, use parameter `--dev`:

```console
./nuchain --dev
```

If you want the storage used as temporary (will be deleted automatically after restart), you can run
the Nuchain by adding parameter `--tmp`. This features is beneficial for those who develops Nuchain
module on _runtime_ layer.

```console
./nuchain --dev --tmp
```

Pre built docker image is also available for those who want to run Nuchain on the platform that has
no pre compiled binary and those who does not want to bother with the compilation process:

```bash
docker run --rm anvie/nuchain:latest nuchain --dev --tmp
```

## Telemetry

You can monitor all activities that are running in the Nuchain network through _telemetry_ in
[telemetry.nuchain.network](https://telemetry.nuchain.network/#/Nuchain).
