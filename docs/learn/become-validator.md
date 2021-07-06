---
id: become-validator
title: Menjadi Validator
sidebar_label: Menjadi Validator
---

Untuk menjadi validator pastikan Anda telah memiliki akun Nuchain terlebih dahulu, cara membuat akun
bisa baca [di sini](account.md).

## Memasang Nuchain Node

Anda bisa memasang Nuchain node di server/komputer Anda dengan cara mengkompilasi kode sumber dari
`master` _branch_ di [repository](https://github.com/nusantarachain/nuchain) atau download
_pre-built binary_-nya di halaman [releases](https://github.com/nusantarachain/nuchain/releases).

Jika ingin memasang dari kode sumber bisa ikuti langkah-langkah
[pasang dari kode sumber](https://github.com/nusantarachain/nuchain/blob/master/README.md#dari-kode-sumber).

Setelah Anda _download_ dari halaman [releases](https://github.com/nusantarachain/nuchain/releases)
extract/unzip file zip-nya, contoh:

```bash
$ unzip nuchain-0.1.3-3cb5203af-linux.zip
```

Jalankan:

```bash
$ ./nuchain --validator
```

**CATATAN:** Jalankan Nuchain sebagai service agar apabila komputer mati/restart bisa jalan lagi
secara otomatis.

Cara lain tercepat untuk dapat menjalankan Nuchain node adalah dengan menggunakan
[Docker](https://docker.com/), baca caranya [di sini](docker.md).

## Hubungkan

Anda perlu menghubungkan akun Anda dengan mesin validator sehingga sistem Nuchain mengetahui kemana
_rewards_ akan diberikan dari hasil kerja mesin validator tersebut. Berikut adalah cara
menghubungkan akun Nuchain dengan mesin validator:

1. Dapatkan session key dari mesin validator kita yang sudah jalan:

```bash
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' http://localhost:9933
```

Output kurang lebih seperti berikut:

```
{"jsonrpc":"2.0","result":"0x2320085170b06281aedc2df4296d7b5042abcef201c57f2e55201f7aefc6af0c5ac19e74b674cb97913d54d63255dc18fbe88ad73392576130e00803c7082716147a5768a1c7f8708379649c0c9246b049699109c94b7d8957ebb813af62620464a70e69288323168afd69358746d684fc178eefac06aa9e94028a0f409a6d1a","id":1}
```

Kopi teks heksa yang panjang pada _field_ _result_ yang diawalai dengan `0x...`, teks tersebut
adalah session key yang nantinya perlu dimasukkan pada tahap pendaftaran/pengajuan menjadi
validator.

## Mengajukan Sebagai Validator

Untuk mengajukan diri sebagai validator masuk ke [Nuchain Dashboard](https://nuchain.riset.tech)
lalu menuju ke menu **Network** > **Staking** > **Account actions** kemudian klik tombol "**+
Validator**":

![Nuchain Validator](https://i.imgur.com/Gr1SNgD.png)

Isi data yang diperlukan untuk proses _Staking_ kemudian klik tombol **next**.

_Paste_ teks heksa yang panjang tadi --yang didapatkan dari langkah sebelumnya-- ke dalam input
_Keys from rotateKeys_:

![Set Session Key](https://i.imgur.com/pqUCE6X.png)

_rewards commission percentage_ bisa diisi 100% untuk mendapatkan seluruh _rewards_ untuk diri
sendiri (tidak termasuk _nominator_).

Apabila ada kesulitan bisa tanya-tanya di grup
[Element](https://app.element.io/#/room/!aYWUxhUvutqbMBQIsN:matrix.org) atau
[Telegram](https://t.me/nusantarachain)

## Pruning

Menjadi validator tidak harus menyimpan semua data blok yang ada, validator bisa juga hanya
menyimpan beberapa data blok terakhir agar tempat penyimpanannya tidak termakan habis. Hal ini bisa
dilakukan dengan cara menggunakan fitur _pruning_. Fitur ini memungkinkan validator menjalankan
mesin tanpa harus menyimpan keseluruhan blok dari awal sampai akhir, tapi hanya beberapa berdasarkan
konfigurasi yang diinginkan. Cara mengaktifkan mode _pruning_ cukup menambahkan parameter
`--unsafe-pruning` dan `--pruning=[JUMLAH-BLOK]`, contoh:

```bash
nuchain --validator --unsafe-pruning --pruning=1000 ...
```

Contoh perintah di atas akan menjalankan validator dengan _pruning_ 1000 atau hanya menyimpan 1000
blok terakhir, blok-blok lama akan dihapus.

Walaupun efisien daya penyimpanan, namun menyimpan semua blok lebih direkomendasikan, karena akan
menjaga _history_ dari transaksi di seluruh jaringan.

## Presync Data

Ketika menjadi validator baru untuk pertama kali maka _node_ akan melakukan proses singkronisasi,
proses ini akan memakan waktu yang lumayan lama ketika blok sudah sangat banyak, untuk mempercepat
proses singkronisasi Anda bisa download _presync_ data berikut:

- [Nuchain Data 9 Mei 2021 full](http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-snapshot-2021-05-09.7z)
  (6GB)
- [Nuchain Data 21 Mei 2021 pruning 1000](http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-snapshot-20210521-pruning1000-rocks.7z)
  (993M)
- [Nuchain Data 5 Juli 2021 pruning 1000](https://drive.google.com/u/3/uc?id=1EoFGFU4QQ21ZHracbgmHtLKdvuaJu-xR&export=download)
  (1,6GB)
- [Nuchain Data 14 April 2021 full](http://dmcd6hvaqrxz0.cloudfront.net/nuchain/presync-data/nuchain-snapshot-20210421-full-rocks.7z)
  (2GB)

Extract menggunakan [7zip](https://www.7-zip.org/) dan arahkan _Nuchain node_ ke data tersebut
menggunakan parameter `--base-path`.
