---
id: build-supply-chain
title: Rantai Pasok
sidebar_label: Rantai Pasok
---

Nuchain mendukung fungsi-fungsi untuk membangun sistem rantai pasok (supply chain).

Kode untuk kebutuhan tersebut bisa ditemukan di dua modul berikut:

- [Product Registry](https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-registry).
- [Product Tracking](https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-tracking).

Alur kerja:

1. **Mendaftarkan produk**, produk perlu didaftarkan terlebih dahulu dengan cara mengirim transaksi
   menggunakan fungsi ekstrinsik `productRegistry.register` dengan parameter:

   - `id` - sebagai id produk, ini bebas bisa berupa numeric atau alpha-numeric, bisa juga GS1 GTIN
     (Global Trade Item Number) atau ASIN (Amazon Standard Identification Number).
   - `owner` - merupakan ID akun organisasi/instansi yang merepresentasikan kepemilikan atas produk.
   - `props` - list data yang berisi key value untuk menjelaskan produknya. Biasanya berisi
     setidaknya SKU atau deskripsi dari produk. Bisa juga berisi informasi seperti kandungan, masa
     kadaluarsa, berat, asal pertanian, waktu panen, dll.

2. **Mendaftarkan pengiriman**, pada tahapan ini produk perlu ditandai siap untuk diproses
   menggunakan fungsi ekstrisik `productTracking.registerShipment` dengan parameter:

   - `id` - berupa id _tracking_-nya.
   - `owner` - merupakan ID dari organisasi/instansi yang merepresentasikan kepemilikan atas produk.
   - `products` - list/array ID dari produk yang akan didaftarkan.

3. **Melakukan _tracking_**, memperbaharui (update) status setiap proses yang dilalui oleh produk
   dengan cara mengirimkan transaksi menggunakan fungsi ekstrinsik `productTracking.trackShipment`.

### Off-chain Worker

Modul Product Tracking dapat mengirimkan notifikasi secara _real-time_ ke luar jaringan
(_off-chain_) menggunakan _Web hook_ untuk setiap pergantian status _tracking_ produk yang terjadi
di jaringan _blockchain_ Nuchain. Hal ini bisa dilakukan karena Nuchain memiliki fitur _off-chain
worker_.

_todo: add sample code here_
