---
id: browser-extension
title: Browser Extension
sidebar_label: Extension
---

Untuk mengakses sebuah layanan/aplikasi biasanya dibutuhkan login, namun istilah login di dunia Web3 tidak relevan. Yang dibutuhkan di Web3 untuk otentikasi dan otorisasi adalah kunci kriptografi bukan lagi _user name_ dan _password_ seperti di dunia sentralisasi.

Saat ini perkembangan Web3 belum didukung oleh adanya native frontend pada browser, sehingga untuk mengakses jaringan Web3 masih membutuhkan alat bantu, sebagai contoh pada ekosistem Ethereum ada alat bantu Metamask, pada Polkadot ada Polkadot JS app, dll. hal ini untuk mempermudah pengguna dalam mengakses Web3, kedepannya ketika semua peramban (_browser_) sudah mendukung Web3 maka alat-alat bantu (_extension_) seperti ini tidak dibutuhkan lagi, karena telah tersedia secara native di peramban.

## Memasang ekstensi

Untuk sementara ini hingga mayoritas peramban mendukung Web3, maka kita membutuhkan alat bantu untuk mengakses jaringan Nuchain, alat bantu ini berupa _browser extension_, yang bisa Anda dapatkan di: 

1. [Nuchain App untuk peramban Chrome](https://chrome.google.com/webstore/detail/nuchain-app/hfcdboaniimgkememgmilhmnkdgggkne)
2. [Nuchain App untuk peramban Firefox](#)

Setelah terpasang di peramban maka akan muncul icon Nuchain seperti pada gambar berikut:

![Nuchain App web extension](/img/nuchain-app-web-extension1.png)

## Fungsi ekstensi

Fungsi dari ekstensi peramban Nuchain App ini adalah untuk menyimpan _private key_ dan mengamankannya secara _offline_ di peramban Anda dengan kata kunci, selanjutnya ketika Anda mengakses website yang mendukung Web3 maka ekstensi ini akan aktif dan meminta ijin Anda untuk otorisasi dalam melakukan operasi/transaksi yang diperlukan di jaringan Nuchain secara aman tanpa perlu meng-expose kunci privat Anda.

Hal ini lebih aman daripada Anda menaruh kunci privat ke aplikasi pihak ke-3, dan lebih baik jangan pernah melakukan hal itu (menyimpan ke pihak ke-3).

## Membuat akun

Anda juga bisa membuat akun melalui ekstensi. Pada hakekatnya akun di dunia Web3 itu hanyalah pasangan asimetris kunci kriptografi, jadi ekstensi ini hanya membuatkan kunci kriptografi secara acak.
Untuk lebih detailnya silahkan baca bagian [Membuat akun menggunakan ekstensi peramban](account.md#menggunakan-ekstensi-peramban).
