---
id: build-supply-chain
title: Rantai Pasok
sidebar_label: Rantai Pasok
---

Nuchain mendukung fungsi-fungsi untuk membangun sistem rantai pasok (supply chain).

Kode untuk kebutuhan tersebut bisa ditemukan di tiga modul berikut:

- [Product Registry](https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-registry).
- [Product Tracking](https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-tracking).

:::info

Untuk bisa mengikuti materi ini pastikan Anda telah membaca bagian
[Getting Started](../learn/learn-main.md) dan [Build](build-intro.md).

:::

Sistem rantai pasok membutuhkan organisasi sebagai holder produk. Tentang organisasi dan bagaimana
cara membuatnya bisa baca di bagian [Organisasi](build-organization.md).

Secara gambaran besar sistem rantai pasok di Nuchain dikontrol oleh organisasi. Organisasi bisa
digunakan untuk melakukan:

1. Registrasi produk.
2. Registrasi _tracking_.
3. Memberikan akses _tracker_.

_**Tracker**_ adalah entitas/individu yang bisa melakukan _update_ status _tracking_ atas ijin akses dari organisasi melalui [DIDs](build-did.md).

![Nuchain Supply Chain](/img/nuchain-supply-chain.png)

_(gambar: skema supply chain di Nuchain)_

Setiap _update_ yang dilakukan oleh _tracker_ akan memunculkan _event_ dan _event_ akan diproses
oleh [off-chain worker](../general/glossary.md#off-chain-worker) untuk dibuatkan notifikasi kemudian
notifikasi akan di-_push_ melalui _webhook_.

## Alur Kerja

1. **Mendaftarkan produk**, produk perlu didaftarkan terlebih dahulu dengan cara mengirim transaksi
   menggunakan fungsi [ekstrinsik](../learn/learn-extrinsic.md) `productRegistry.register` dengan
   parameter:

   - `id` - sebagai id produk, ini bebas bisa berupa numeric atau alpha-numeric, bisa juga GS1 GTIN
     (Global Trade Item Number) atau ASIN (Amazon Standard Identification Number).
   - `org_id` - merupakan ID akun organisasi/instansi yang merepresentasikan kepemilikan atas
     produk.
   - `props` - list data yang berisi key value untuk menjelaskan produknya. Biasanya berisi
     setidaknya SKU atau deskripsi dari produk. Bisa juga berisi informasi seperti kandungan, masa
     kadaluarsa, berat, asal pertanian, waktu panen, dll.

2. **Mendaftarkan tracking**, produk yang akan di-_track_ perlu didaftarkan terlebih dahulu
   menggunakan fungsi [ekstrinsik](../learn/learn-extrinsic.md) `productTracking.register` dengan
   parameter:

   - `id` - id _tracking_-nya.
   - `org_id` - merupakan ID dari organisasi/instansi yang merepresentasikan kepemilikan atas
     produk.
   - `year` - tahun inisiasi _tracking_, contoh "2021".
   - `products` - list/array ID dari produk yang akan didaftarkan.

3. **Melakukan update status**, memperbaharui (update) status setiap proses yang dilalui oleh produk
   dengan cara mengirimkan transaksi menggunakan fungsi [ekstrinsik](../learn/learn-extrinsic.md)
   `productTracking.updateStatus` dengan parameter:

   - `id` - ID kode tracking.
   - `status` - (string) status yang akan diberikan.
   - `timestamp` - timestamp dalam bentuk miliseconds.
   - `location` - lokasi di mana _tracking_ dilakukan.
   - `readings` - informasi tambahan yang akan dimasukkan berkaitan dengan produknya.

Untuk bisa melakukan _update status_ maka _caller_ harus terlebih dahulu memiliki akses sebagai
_tracker_ yang diberikan oleh organisasi kepada akun yang ditunjuk. Cara memberikan akses bisa
menggunakan fungsi ekstrinsik `did.createDelegate` dengan tipe `ProductTracker` yang berada di modul
`did`. Akses ini bisa diberikan secara terbatas (dengan _expritaion time_) atau secara bebas (tanpa
_expiration time_).

## Verifikasi

Untuk memverifikasi kita bisa melakukan _query_ menggunakan fungsi _query_
`productTracking.tracking(ID)`. Fungsi tersebut bisa digunakan untuk mendapatkan detail data
tracking yang berisi _metadata_ dan list ID produk yang disertakan.

Sementara untuk mendapatkan _event-event_ yang terjadi pada objek _tracking_ bisa menggunakan fungsi
_query_ `productTracking.eventsOfTracking(ID)`. Fungsi tersebut hanya mengembalikan ID dari event.
Untuk mendapatkan detail event-nya bisa melakukan _query_ menggunakan fungsi
`productTracking.eventByIdx(IDX)`.

## Notifikasi

Nuchain dapat mengirimkan notifikasi secara _real-time_ ke luar jaringan (_off-chain_) menggunakan
_Web hook_ untuk setiap _event_ yang terjadi pada _tracking_ di jaringan _blockchain_.

Nuchain menggunakan _Off-chain Worker_ untuk keperluan ini.

## Demo

_tbc_

_todo: add sample code here_
