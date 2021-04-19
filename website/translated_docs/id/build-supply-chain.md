---
id: build-supply-chain
title: Rantai Pasok
sidebar_label: Rantai Pasok
---

Nuchain mendukung fungsi-fungsi untuk membangun sistem rantai pasok (supply chain).

Kode untuk kebutuhan tersebut bisa ditemukan di tiga modul berikut:

- [Product Registry](https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-registry).
- [Product Tracking](https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-tracking).

Sistem rantai pasok membutuhkan organisasi sebagai holder utama. Pastikan Anda telah mendaftarkan
organisasi di Nuchain, silahkan baca [Organisasi](build-organization.md).

Alur kerja:

1. **Mendaftarkan produk**, produk perlu didaftarkan terlebih dahulu dengan cara mengirim transaksi
   menggunakan fungsi ekstrinsik `productRegistry.register` dengan parameter:

   - `id` - sebagai id produk, ini bebas bisa berupa numeric atau alpha-numeric, bisa juga GS1 GTIN
     (Global Trade Item Number) atau ASIN (Amazon Standard Identification Number).
   - `org_id` - merupakan ID akun organisasi/instansi yang merepresentasikan kepemilikan atas
     produk.
   - `props` - list data yang berisi key value untuk menjelaskan produknya. Biasanya berisi
     setidaknya SKU atau deskripsi dari produk. Bisa juga berisi informasi seperti kandungan, masa
     kadaluarsa, berat, asal pertanian, waktu panen, dll.

2. **Mendaftarkan tracking**, produk yang akan di-_track_ perlu didaftarkan terlebih dahulu
   menggunakan fungsi ekstrinsik `productTracking.register` dengan parameter:

   - `id` - berupa id _tracking_-nya.
   - `org_id` - merupakan ID dari organisasi/instansi yang merepresentasikan kepemilikan atas
     produk.
   - `year` - tahun inisiasi _tracking_, contoh "2021".
   - `products` - list/array ID dari produk yang akan didaftarkan.

3. **Melakukan update status**, memperbaharui (update) status setiap proses yang dilalui oleh produk
   dengan cara mengirimkan transaksi menggunakan fungsi ekstrinsik `productTracking.update_status`
   dengan parameter:

   - `id` - ID kode tracking.
   - `status` - (string) status yang akan diberikan.
   - `timestamp` - timestamp dalam bentuk miliseconds.
   - `location` - lokasi di mana _tracking_ dilakukan.
   - `readings` - informasi tambahan yang akan dimasukkan berkaitan dengan produknya.

### Off-chain Worker

Modul Product Tracking dapat mengirimkan notifikasi secara _real-time_ ke luar jaringan
(_off-chain_) menggunakan _Web hook_ untuk setiap pergantian status _tracking_ produk yang terjadi
di jaringan _blockchain_ Nuchain. Hal ini bisa dilakukan karena Nuchain memiliki fitur _off-chain
worker_.

_todo: add sample code here_
