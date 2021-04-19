---
id: build-organization
title: Organization
sidebar_label: Organization
---

Nuchain mendukung pembuatan organisasi di dalam _blockchain_, organisasi ini diperlukan untuk
menggunakan fungsi-fungsi lainnya seperti sertifikat.

Untuk membuat organisasi cukup dengan melakukan pemanggilan fungsi ekstrinsik `organization.create`
dengan parameter:

- `name` - nama dari organisasi.
- `description` - deskripsi singkat yang menjelaskan tentang organisasi.
- `admin` - ID akun yang akan memiliki akses pada organisasi.
- `website` - URL website organisasi.
- `email` - Email organisasi.

Pembuatan organisasi di jaringan Nuchain membutuhkan biaya 10 ARA (belum termasuk biaya transaksi)
biaya ini akan masuk ke kebendaharaan.
