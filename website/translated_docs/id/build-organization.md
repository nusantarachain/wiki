---
id: build-organization
title: Organisasi
sidebar_label: Organisasi
---

Nuchain mendukung pembuatan organisasi di dalam _blockchain_.

Organisasi adalah obyek yang sama seperti akun menggunakan _address_ yang sama seperti akun biasa
bedanya organisasi tidak dikontrol secara langsung tetapi dikontrol oleh `admin` atau orang yang 
memiliki akses sebagai `admin` melalui delegasi [Decentralized ID](build-did.md).

Organisasi ini diperlukan untuk
menggunakan fitur lainnya, seperti sertifikat digital, supply chain, dll.

### Membuat Organisasi

Untuk membuat organisasi cukup dengan melakukan pemanggilan fungsi ekstrinsik `organization.create`
dengan parameter:

- `name` - nama dari organisasi.
- `description` - deskripsi singkat yang menjelaskan tentang organisasi.
- `admin` - ID akun yang akan memiliki akses pada organisasi.
- `website` - URL website organisasi.
- `email` - Email organisasi.

Pembuatan organisasi di jaringan Nuchain membutuhkan biaya 10 ARA (belum termasuk biaya transaksi)
biaya ini akan masuk ke kebendaharaan.
