---
id: build-certificate
title: Sertifikat Digital
sidebar_label: Sertifikat Digital
---

Nuchain mendukung pembuatan sertifikat digital.

Data sertifikat di Nuchain bersifat abadi --_sekali ditulis tidak dapat dihapus_, namun validitasnya
tetap bisa dicabut (revoke).

:::info

Sertifikat di Nuchain hanya sebagai _platform_ penyimpanan saja, bukan sebagai otoritas. Namun data
di dalam _blockchain_ dengan sifat dasarnya yang abadi bisa dijadikan sebagai bukti keberadaan
(eksistensi) sertifikat secara digital.

:::

## Membuat Sertifikat

Untuk dapat membuat sertifikat maka diperlukan organisasi sebagai wadah (holder) dari penerbit
sertifikat tersebut, cara membuat organisasi bisa baca bagian [Organisasi](build-organization.md).

Pembuatan sertifikat di Nuchain bisa digambarkan sebagai berikut:

![Nuchain Certificate](/img/nuchain-certificate.svg)

1. Organisasi perlu membuat sertifikat (sebagai _template_) untuk kemudian bisa digunakan untuk
   diberikan (issued) kepada penerima sertifikat tersebut. Akun yang bisa membuat sertifikat adalah
   `admin` dari organisasi atau akun yang memiliki akses [DId](build-did.md) ke organisasi.
   Pembuatan sertifikat bisa menggunakan fungsi ekstrinsik `certificate.create`.
2. Organisasi memberikan sertifikat kepada seseorang, menggunakan fungsi ekstrinsik
   `certificate.issue`.

## Memeriksa Sertifikat

Sertifikat yang telah dibuat dan diterbitkan akan ditulis di _blockchain_ dan bisa dibuktikan dengan
cara melakukan query melalui fungsi `certificate.issuedCert(ID)`.

Validitas sertifikat bisa dibuktikan dengan memastikan dua hal:

1. Sertifikat tidak dicabut.
2. Sertifikat tidak kadaluarsa.

Contoh mendapatkan informasi sertifikat yang telah diterbitkan menggunakan javascript Api:

```javascript
let cert = await api.query.certificate.issuedCert("A35tYxqSP6i");
```

## Pencabutan

Sertifikat digital di Nuchain bisa dicabut sehingga menghilangkan validitasnya, untuk mencabutnya
bisa menggunakan fungsi ekstrinsik `certificate.revoke`.

## Kadaluarsa

Sertifikat digital bisa memiliki kadaluarsa apabila penerbit menginginkannya. Hal ini bisa dilakukan
dengan cara mengisi parameter `expired` ketika menerbitkan sertifikat.
