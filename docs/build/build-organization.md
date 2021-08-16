---
id: build-organization
title: Organisasi
sidebar_label: Organisasi
---

Nuchain mendukung pembuatan organisasi di dalam _blockchain_.

Organisasi adalah objek yang sama seperti akun menggunakan _address_ yang sama seperti akun biasa
bedanya organisasi tidak dikontrol secara langsung tetapi dikontrol oleh `admin` atau orang yang
memiliki akses sebagai `admin` melalui delegasi [Decentralized ID](build-did.md).

Organisasi ini diperlukan untuk menggunakan fitur lainnya, seperti sertifikat digital, supply chain,
dll.

### Membuat Organisasi

Untuk mendaftar sebagai organisasi masuk ke [Nuchain Dashboard](https://dashboard.nuchain.network)
lalu menuju ke menu **Accounts** > **Organizations** kemudian klik tombol **+ Register**.
`NOTE! Fitur organizations sementara baru tersedia di jaringan Testnet.`

Kemudian isi data dengan parameter sebagai berikut:

![Set Session Key](https://i.imgur.com/WmVC5CU.png)

Keterangan:

- `name` - nama dari organisasi.
- `description` - deskripsi singkat yang menjelaskan tentang organisasi.
- `admin` - ID akun yang akan memiliki akses pada organisasi.
- `website` - URL website organisasi.
- `email` - Email organisasi.

Kemudian masukkan **password** akun yang digunakan sebagai admin dan klik tombol **Sign and
Submit**.

![Set Session Key](https://i.imgur.com/ks7Hyjh.png)

Maka muncul organisasi yang telah dibuat di dashboard My organizations.

![Set Session Key](https://i.imgur.com/PSbwVEP.png)

**_Catatan:_** Pembuatan organisasi di jaringan Nuchain **membutuhkan biaya 10 ARA** (belum termasuk
biaya transaksi) biaya ini akan masuk ke kebendaharaan.
