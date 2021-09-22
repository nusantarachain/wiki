---
id: faq
title: Frequently Asked Questions (FAQ)
sidebar_label: FAQ
---

<!--
Dokumen ini dibagikan menjadi tiga topik utama:

- [Teknikal](faq-technical) untuk yang berkaitan dengan pengembangan aplikasi di Nuchain.
- [Pemelihara Jaringan](faq-network-maintainer) untuk yang berkaitan dengan pemeliharaan jaringan
  Nuchain seperti mekanisme validator dan nominator.
- [General](faq-general) untuk yang berkaitan dengan pertanyaan seputar Nuchain secara general. -->

## Bagaimana cara menjadi validator?

Baca: [cara menjadi validator](../learn/become-validator.md)

## Kenapa validator saya berada di waiting list terus?

Ini berkaitan dengan maksimal validator pada Nuchain yang bisa dilihat di bagian **Staking** >
**Staking overview**

![maksimal validator](https://i.imgur.com/8snPCSR.png)

Apabila jumlah validator telah mencapai batas maksimal maka sistem akan melakukan mekanisme
pemilihan untuk menentukan siapa yang layak untuk masuk ke jajaran validator yang mana kelayakannya
ditentukan oleh beberapa hal:

1. Ketersediaan mesin validator yang selalu aktif/online. Jadi kalau mesin posisi mati atau sering
   mati maka akan jarang terpilih.
2. Jumlah _stake_ yang dijaminkan, semakin tinggi jumlah _stake_ yang dijaminkan semakin tinggi
   kemungkinan terpilih sebagai validator.

## Berapa stake minimal untuk bisa selalu terpilih sebagai validator?

Tidak ada jumlah stake minimal, tetapi apabila batas maksimal jumlah validator telah tercapai
validator yang tidak masuk butuh _stake_ lebih besar dari _stake_ validator terkecil saat ini untuk
bisa menggantikannya, untuk melihat berapa nilai _stake_ terkecil pada validator saat ini bisa lihat
bagian **Staking** > **Targets**:

![Minimal rata-rata stake nuchain](https://i.imgur.com/OTA9AfB.png)

## Kapan validator dipilih?

Validator dipilih oleh sistem setiap akhir sesi (4 jam sekali).

## Saya telah menjadi validator tapi setelah sekian hari tidak mendapatkan _rewards_?

Ada beberapa kemungkinan:

1. **Belum terpilih** - pastikan validator Anda telah masuk ke daftar validator aktif, bisa lihat
   [di dashboard bagian staking](https://dashboard.nuchain.network/#/staking). Apabila belum
   kemungkinan validator Anda berada di bagian _waiting_ yang artinya belum terpilih oleh sistem.
2. **Belum di-payout** - validator mendapatkan _rewards_ di setiap akhir era, dimana user perlu
   melakukan _payout_ untuk mencairkan ARA-nya. Cara _payout_ bisa baca
   [di sini](https://github.com/nusantarachain/nuchain/wiki/Payout).
3. **Mesin mati** - mesin yang digunakan untuk validator mati atau tidak aktif sehingga tidak
   membuat blok sama sekali.
4. **Belum dihubungkan** - mesin validator belum dihubungkan menggunakan _session key_, baca
   [cara menjadi validator](../learn/become-validator.md) untuk melihat cara menghubungkannya.

## Apakah Nuchain mendukung Smart Contract?

Ya, Nuchain mendukung Smart Contract, contoh aplikasi Smart Contract-nya bisa lihat
[di sini](https://github.com/nusantarachain/onchain-apps).

## Apakah ada program Faucet?

Ya, ada dari komunitas: [https://faucet.nuchain.id](https://faucet.nuchain.id/).

## Apa itu Era

Era adalah putaran waktu yang di dalamnya terdiri dari beberapa sesi, pada Nuchain 1 era setara
dengan 24 jam. Era ini memudahkan sistem dalam menghitung _rewards_ dan melakukan perubahan yang
terjadwal.

## Ketika saya menjadi validator aktif dan komputer validator saya mati, apakah ada efeknya?

Ya ada, apabila komputer yang dijadikan validator mati atau membuat _malicious block_ ada
kemungkinan sistem akan menghukum dengan cara memotong (slashing) **stake** yang Anda jaminkan
(**bond**). Adapun besaran nilai yang dipotong dinamis tergantung seberapa membahayakan sebuah
aktifitas tersebut pada jaringan.

## Apa yang dimaksud `sync` ketika menjalankan node pertama kali

Ketika menjalankan _nuchain node_ untuk pertama kali maka _node_ akan melakukan proses singkronisasi
untuk mendapatkan seluruh data blok di jaringan, proses ini akan memakan waktu yang lumayan lama
ketika blok sudah sangat banyak, untuk mempercepat proses singkronisasi Anda bisa download _presync_
data, lebih detailnya silahkan baca [Presync Data](../learn/become-validator.md#presync-data).

## Gagal Kompilasi error "expected comma after minor version number, found '\t'"

Apabila menemukan error seperti ini maka perlu melakukan update untuk dependensi parity-db dengan
cara:

```bash
cargo update -p parity-db
```

## Apa fungsi ARA?

ARA adalah native token, berfungsi untuk:
1. Pembiayaan jaringan seperti membayar beban komputasi, penggunaan bandwidth, dan penyimpanan data. 
2. Sebagai biaya layanan (gas fee).
3. Membayar para validator sebagai insentif karena telah berkontribusi dalam menghidupi dan mengamankan jaringan.
4. Keperluan governance seperti voting dalam menentukan kebijakan dan keputusan pengembangan.
5. Biaya pembuatan organisasi dalam rantai blok (on-chain governance).
6. Penggunaan fungsi-fungsi lainnya di dalam jaringan, seperti penggunaan _smart contract_.

