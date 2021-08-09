---
id: learn-extrinsic
title: Ekstrinsik
sidebar_label: Ekstrinsik
---

Ekstrinsik adalah istilah untuk mengeksekusi transaksi atau operasi di dalam jaringan yang bersifat
_mutable_, artinya operasi akan mempengaruhi state/data di dalam jaringan.

Ada dua cara untuk mengakses ekstrinsic:

## Menggunakan Dashboard

Cara paling mudah adalah dengan menggunakan [dashboard Nuchain](https://dashboard.nuchain.network).
Cara ini biasanya digunakan untuk ujicoba atau eksplorasi saja. Cara yang praktikal adalah dengan
diprogram, lihat bagian [Programmatic](#programmatic).

Kita bisa mengakses fungsi ekstrinsik melalui
[dashboard Nuchain](https://dashboard.nuchain.network) > menu **Ekstrinsik**:

![Menu Ekstrinsik](/img/extrinsics-menu.png)

Pada halaman **Ekstrinsik** akan ditemukan antar muka yang memudahkan kita untuk melakukan
pemanggilan fungsi berdasarkan modul yang tersedia di Nuchain:

![Submisi Ekstrinsik](/img/extrinsic-submission.png)

Contoh pada gambar tersebut adalah apabila kita ingin mentransfer ARA ke akun lain melalui fungsi
ekstrinsik menggunakan modul `balances` dengan nama fungsi `transfer`.

## Programmatic

Nuchain menyediakan [pustaka javascript](https://github.com/nusantarachain/api) untuk mempermudah
mengakses ekstrinsic secara terprogram.

Contoh melakukan transfer secara terprogram:

```javascript
const api = await ApiPromise.create({
  provider: new WsProvider(NUCHAIN_NODE_ADDRESS),
});

// lakukan pemanggilan fungsi ekstrinsik
// di modul `balances` fungsi `transfer`.
api.tx.balances.transfer(recipient, 100).signAndSend(sender, ({ status, events }) => {
  if (status.isInBlock || status.isFinalized) {
    console.log("transfer sukses!");
  }
});
```
