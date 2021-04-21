---
id: learn-account
title: Akun Nuchain
sidebar_label: Akun
---

Akun pada Nuchain sebenarnya hanyalah sebuah simbol dari representasi kunci kirpto yang terdiri dari
kunci publik dan kunci rahasia. Kunci publik digunakan sebagai identifikasi akun di dalam jaringan
dan kunci rahasia digunakan untuk mengakses sumber daya di jaringan atas nama akun kita.

Membuat akun di Nuchain sangat mudah, tidak perlu konfirmasi email seperti pada layanan terpusat
pada umumnya. Yang diperlukan hanyalah menggenerasikan pasangan kunci kripto, dan semua itu bisa
dilakukan di komputer lokal tanpa perlu koneksi internet sama sekali.

## Membuat Akun

Ada beberapa cara dalam membuat akun di Nuchain:

### Menggunakan Dashboard

Menggunakan dashboard adalah cara paling mudah dalam membuat pasangan kunci kripto. Berikut
langkah-langkahnya:

- Buka [Dashboard Nuchain](https://dashboard.nuchain.network).
- Buka tab `Account` klik tombol `+ Add acocunt`, di awal Anda akan langsung mendapatkan _mnemonic
  seed_ yang digenerasikan secara otomatis oleh program, Anda perlu menyimpan dan merahasiakan
  _mnemonic seed_ ini karena bisa digunakan untuk me-_recovery_ akun Anda apabila Anda lupa kata
  kunci atau kehilangan _json_-nya. Dan pastikan dicatat di tempat yang aman dan jangan sampai
  hilang.
- klik **I have saved my mnemonic seed safely** dan klik tombol **Next**.
- Pada halaman selanjutnya isi nama yang Anda inginkan, kata kunci dan **Next**.
- Selesai Anda akan diberikan file _json_ yang bisa digunakan untuk _import_ akun ke platform
  lainnya, seperti mobile App dll.

### Menggunakan CLI

Yang Anda perlukan hanya program Nuchain, Anda bisa mendapatkannya dengan cara mengunduh dari
halaman [releases](https://github.com/nusantarachain/nuchain/releases).

Kemudian pada terminal ketikkan:

```bash
./nuchain key generate
```

Maka akan muncul output kurang lebih seperti berikut:

```bash
Secret phrase `shoulder lizard sea lion eye dignity current major clutch call antenna planet` is account:
  Secret seed:      0x9910672e399e49370e1493c2b6aef855c3a7a7dd2fc1f9463b97b29710ba3ffb
  Public key (hex): 0x74d0deecd560ecc66607065574534daefa067df4fbd75363f741ae5ae8de1d6b
  Account ID:       0x74d0deecd560ecc66607065574534daefa067df4fbd75363f741ae5ae8de1d6b
  SS58 Address:     5EhsTbb8Gf6aUGcE91cDrGNr163y5GXvU5vexdyVAevE2daC
```

Anda sudah memiliki SS58 Address tersebut sebagai representasi akun Anda di Nuchain.

:::caution

Simpan **Secret phrase** dengan aman dan jangan pernah ditunjukkan ke orang lain, karena siapapun
yang memiliki **Secret phrase** bisa menggunakannya untuk mengembalikan (recovery) akun Anda.

Mengapa Anda butuh **Secret phrase**? Karena manusia adalah tempatnya lupa, ketika Anda lupa kata
kunci, maka hanya **Secret phrase** inilah yang dapat membantu mengembalikan akunnya.

:::
