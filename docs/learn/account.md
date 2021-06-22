---
id: account
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

1. Buka [Dashboard Nuchain](https://dashboard.nuchain.network).
2. Buka tab `Account` klik tombol `+ Add acocunt`, di awal Anda akan langsung mendapatkan _mnemonic
   seed_ yang digenerasikan secara otomatis oleh program, Anda perlu menyimpan dan merahasiakan
   _mnemonic seed_ ini karena bisa digunakan untuk me-_recovery_ akun Anda apabila Anda lupa kata
   kunci atau kehilangan _json_-nya. Dan pastikan dicatat di tempat yang aman dan jangan sampai
   hilang.

   ![Add Account](/img/add-account.png)

   :::caution Jangan gunakan mnemonic seeds pada contoh akun pada gambar di atas.

3. klik **I have saved my mnemonic seed safely** dan klik tombol **Next**.
4. Pada halaman selanjutnya isi nama yang Anda inginkan, kata kunci dan **Next**.
5. Selesai Anda akan diberikan file _json_ yang bisa digunakan untuk _import_ akun ke platform
   lainnya, seperti mobile App dll.

### Menggunakan CLI

Membuat pasangan kunci kripto menggunakan CLI adalah cara paling aman.

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

## Memindah Akun

Perlu diketahui bahwa akun di dunia desentralisasi dimiliki oleh pengguna sendiri, sehingga akses
perlu selalu Anda bawa dan ketika berpindah perangkat maka diperlukan memindah akun tersebut ke
perangkat lain, lebih tepatnya memindah akses.

:::caution

Nuchain tidak memiliki akses pada akun Anda, kehilangan kunci akses akan membuat akun Anda terkunci
selamanya.

:::

Dokumentasi ini lebih menjelaskan tentang aspek _best practice_-nya untuk keamanan, karena pada
dasarnya akun di dunia desentralisasi tidak perlu dipindahkan, tetapi hanya kunci akses-nya saja
yang dipindahkan ketika berganti perangkat.

### Backup

Anda perlu membuat backup file berupa json terlebih dahulu sebagai langkah awal dalam memindahkan
akun, cara ini tidak diperlukan apabila Anda sudah memiliki file json akun Anda dan bisa langsung
baca bagian [Restore](#restore).

Untuk pengguna web [dashboard](https://dashboard.nuchain.network), backup akun bisa dilakukan
melalui menu **Accounts** lalu klik menu konteks (icon titik tiga vertikal sebelah kanan) pada
daftar akun yang ingin di-_backup_, kemudian pilih "Create backup file for this account".

Maka akun muncul modal dialog seperti berikut:

![Backup Account](/img/backup-account.png)

Masukkan kata kunci akun Anda dan klik tombol **Download**.

### Restore

Anda bisa mengembalikan akses akun menggunakan fitur restore apabila Anda telah memiliki file json
yang Anda dapatkan ketika pertama kali membuat akun atau melalui prosedur [Backup](#backup).

Untuk pengguna web [dashboard](https://dashboard.nuchain.network), restore akun bisa dilakukan
melalui menu **Accounts** > **Restore JSON**. Akan muncul jendela untuk mengunggah file json dan
kata kunci (password) untuk membuka file json-nya. Klik **Restore** dan akun Anda akan ditambahkan
ke dashboard.

## Menambahkan Akun via QR-Code

Cara lain dalam mengakses akun adalah dengan menggunakan QR-Code.

### Pada Web

Untuk pengguna web [dashboard](https://dashboard.nuchain.network) buka menu **Accounts** kemudian
klik **Add via Qr**, maka akan muncul jendela kurang lebih seperti berikut:

![Add Account QR-Code](/img/add-account-qrcode.png)

Ijinkan sementara browser Anda untuk mengakses kamera dan arahkan gambar QR-code ke kamera. Pastikan
gambar QR-code berada di dalam garis kotak merah dengan jelas.

Apabila berhasil terdeteksi maka akan muncul jendela baru untuk mengisi nama dan kata kunci yang
akan digunakan untuk mengakses akun tersebut.


## Menambahkan Akun Nuchain Menggunakan Gift Card pada Nuchain App

Nuchain memiliki gift card yang akan dibagikan pada saat event nuchain berlangsung. Untuk mengenai event nuchain yang akan datang, bisa bergabung pada grup [telegram nuchain](https://t.me/nusantarachain). Sebelum menggunakan gift card nuchain, pastikan telah memasang [Nuchain App](https://play.google.com/store/apps/details?id=network.nuchain.app). Setalah Nuchain App terpasang buka aplikasi kemudian pilih **Import Account** > **Source Type** > **QR Code**. Kemudian akan ada form untuk informasi akun nuchain seperti gambar di bawah ini.

![Set Session Key](https://imgur.com/VFDmYhK)

Keterangan:
- `Address` - untuk mengisi alamat nuchain, klik **gambar kamera** untuk mekukan proses scan Qr Code pada gift card agar muncul alamat adrress secara otomatis.
- `name` - nama akun nuchain.
- `password` - password akun nuchain.
- `confirm password` - konfirmasi password.

Setelah selesai mengisi form tersebut klik **Next** maka akan muncul dashboard akun anda.

![Set Session Key](https://imgur.com/XzEtfoc)




