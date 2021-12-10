---
id: governance
title: Governance
sidebar_label: Governance
---

Governance memberikan kesempatan pada komunitas dalam menentukan arah dan kebijakan sistem secara
demokratis.

Nuchain mendukung sistem on-chain governance, yakni mekanisme pengambilan keputusan strategis secara
voting yang ditulis dan dieksekusi langsung di dalam jaringan blockchain.

Penerapan mekanisme governance secara "on-chain" bertujuan untuk:

1. Memastikan kebijakan tertulis di jaringan blockchain dan dapat dipastikan informasinya tidak
   berubah.
2. Memastikan bahwa keputusan yang diambil adalah hasil dari keputusan bersama dan tidak bisa
   disangkal oleh pemberi voting (non-repudiation).
3. Memastikan bahwa semua perubahan tercatat dan dapat diaudit (auditability).
4. Memastikan pengambil keputusan adalah akun otentik dan telah dipercaya oleh publik untuk
   mengambil keputusan secara kolektif.
5. Memastikan mekanisme demokrasi berjalan otomatis sesuai aturan yang telah ditulis di dalam
   sistem.

## Dewan

Dewan merupakan entitas yang memiliki peranan sebagai pembuat rencana perubahan/pengembangan yang
kemudian bisa di-voting oleh semua anggota dewan lainnya.

Anggota dewan dipilih melalui mekanisme voting, dimana siapapun bisa mengajukan diri sebagai
kandidat dan siapapun bisa memberikan suaranya kepada kandidat tertentu agar memiliki kekuatan yang
cukup untuk terpilih sebagai anggota dewan.

Jumlah anggota dewan dibatasi maksimal 13 kursi.

Daftar anggota dewan bisa dilihat di dashboard > Governance >
[Council](https://dashboard.nuchain.network/#/council)

Anggota dewan bisa mengajukan rencana perubahan/pengembangan, dengan cara membuat mosi
([motions](https://dashboard.nuchain.network/#/council/motions)), kemudian anggota dewan lainnya
bisa melakukan voting pada mosi yang ada.

## Proposal

Ada beberapa cara untuk mengajukan perubahan/pengembangan di jaringan Nuchain, pertama melalui mosi
dan kedua melalui referendum.

Mosi hanya bisa dibuat dan divoting oleh anggota dewan, sementara referendum bisa diajukan oleh
siapa saja dan bisa divoting secara langsung oleh siapa saja pengguna nuchain.

## Perubahan/pengembangan yang bisa dilakukan?

Semua fungsi yang ada di pallet Nuchain bisa dieksekusi melalui mekanisme on-chain governance,
berikut adalah beberapa fungsi strategis yang bisa dieksekusi untuk melakukan perubahan/pengembangan
sistem:

1. Meningkatkan jumlah batas maksimal validator.
2. Memberikan ijin (approval) pencairan anggaran dari kebendaharaan (treasury) yang diajukan oleh
   masyarakat untuk keperluan tertentu (proyek) yang membangun.
3. Memperbaharui sistem Nuchain (runtime).
4. Memindahkan proposal yang diajukan oleh dewan teknis (technical commite) ke mosi.
5. Menambahkan registrar (verifikator on-chain identity).
6. Mengeluarkan (kick) validator dari daftar aktif.
7. Dll.

Contoh keputusan strategis adalah menurunkan _gass fee_, ketika nilai token native terlalu tinggi
maka perlu ada mekanisme untuk memastikan biaya _gass fee_ di jaringan nuchain tetap terjangkau,
melalui mekanisme governance hal ini bisa dilakukan dalam hitungan hari.
