---
id: build-supply-chain
title: Supply Chain
sidebar_label: Supply Chain
---

Nuchain mendukung fungsi-fungsi untuk membangun sistem rantai pasok (supply chain).

Kode untuk kebutuhan fungsional rantai pasok bisa ditemukan di dua palet berikut:

- [Product Registry](https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-registry).
- [Product Tracking](https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-tracking).

Alur kerja:

1. Mendaftarkan produk dengan cara mengirim transaksi menggunakan fungsi ekstrinsik
   `productRegistry.register` dengan parameter berikut:

- `id` sebagai id produk, ini bebas bisa berupa numeric atau alpha-numeric, bisa juga GS1 GTIN
  (Global Trade Item Number) atau ASIN (Amazon Standard Identification Number).
- `owner` merupakan ID akun organisasi/instansi yang merepresentasikan kepemilikan atas produk.
- `props` list data yang berisi key value untuk menjelaskan produknya. Biasanya berisi setidaknya
  SKU atau deskripsi dari produk. Bisa juga berisi informasi seperti kandungan, masa kadaluarsa,
  berat, asal pertanian, waktu panen, dll.
