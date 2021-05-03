---
id: build-intro
title: Build
sidebar_label: Intro
---

Nuchain mendukung pengembangan aplikasi di atas _blockchain_ (on-chain app) yang biasa disebut juga
dengan _smart contract_.

Saat ini Nuchain secara _native_ memilik fitur untuk membangun aplikasi berbasis:

- DIDs (Decentralized Identifiers)
- Organisasi
- DAO (Decentralized Autonomous Organization).
- Supply Chain.
- Digital Certificate Platform.
- NFT (Non Fungible Token).

Semua fungsi yang dibutuhkan bisa diakses menggunakan [Ekstrinsik](../learn/learn-extrinsic.md).

## Pengembangan

Ada dua cara memanfaatkan jaringan di Nuchain untuk membangun aplikasi:

Yang pertama adalah dengan menggunakan [_smart contract_](../general/glossary.md#kontrak-pintar).
Anda bisa membangun [DApps](../general/glossary.md#dapps) di atas jaringan Nuchain. Contoh kode
untuk [DApps](../general/glossary.md#dapps) bisa dilihat di
[onchain-apps](https://github.com/nusantarachain/onchain-apps).

Yang kedua adalah dengan membuat modul pada _runtime_. Apabila dalam mengembangkan aplikasi ada
kebutuhan khusus yang tidak bisa dilakukan di
[_smart contract_](../general/glossary.md#kontrak-pintar) maka bisa membuat modul di _runtime_.
Namun perlu dicatat bahwa setiap perubahan atau penambahan yang akan dibuat di _runtime_ harus
memenuhi kriteria dan sarat khusus, karena perubahan di dalam _runtime_ sifatnya _global_ dan perlu
melakukan _upgrade_ system.

## Testnet

Untuk mempermudah proses development Anda bisa menggunakan [jaringan](network.md)
[Testnet](../general/glossary.md#testnet). Jaringan Testnet Nuchain bisa diakses melalui
[dashboard](https://dashboard.nuchain.network), caranya:

1. Kunjungi web app [dashboard](https://dashboard.nuchain.network).
2. Kemudian ganti jaringan dengan cara klik logo Nuchain di sebelah kiri atas, lalu pada "LIVE
   NETWORKS" pilih menu "Nuchain Testnet" _hosted by Rantai Nusantara_.

![How to change Nuchain Testnet](/img/change-network-testnet.png)

3. Klik tombol "Switch" dan Anda sudah masuk jaringan Testnet.
