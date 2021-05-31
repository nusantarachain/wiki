---
id: nominator
title: Nominator
sidebar_label: Nominator
---

Nominator adalah individu yang ingin ikut berpartisipasi dalam mengamankan jaringan tanpa menjadi
validator. Berbeda dengan validator, nominator tidak memerlukan mesin untuk melakukan validasi blok.
Tetapi bisa menggunakan token yang dimiliki untuk membantu memperkuat validator lain agar kuat
terpilih dan mudah masuk ke dalam jajaran validator. Sebagai imabalannya, nominator akan mendapatkan
token ARA sesuai dengan prosentase bagi hasil yang diset oleh validator.

## Cara Menjadi Nominator

Untuk menjadi nominator Anda perlu [membuat akun](account.md) terlebih dahulu.

Buka [Nuchain Dashboard](https://dashboard.nuchain.network) lalu pilih menu `Network` > `Staking` >
`Account actions` lalu klik tombol `Nominator`

Pada jendela nominator tampak beberapa input yang perlu diisi:

![Nominator](https://i.imgur.com/z3ZlnIg.png)

- **stash account** - adalah akun yang akan dijadikan sebagai _holding_ dari proses nominasi, akun
  ini bukan digunakan untuk transaksi harian tetapi hanya untuk menghandle proses nominasi, dimana
  Anda bisa menggunakan akun ini untuk meningkatkan jumlah _stake_ dari setiap _rewards_ yang
  didapatkan.
- **controller account** - adalah akun yang mengontrol _Stash Account_. Ini boleh sama dengan yang
  akan digunakan sebagai _stash account_, namun direkomendasikan dibedakan.
- **value bonded** - adalah jumlah ARA yang akan di-_stake_, jangan memasukkan semua yang ARA yang
  Anda miliki, terutama apabila _stash_ dan _controller account_ sama maka Anda tidak bisa melakukan
  _payout_ untuk menarik _rewards_ dikemudian hari, karena untuk menarik _rewards_ perlu ARA sebagai
  _fee_-nya.
- **on-chain bonding duration** - adalah masa tunggu _stake_ akan dikunci dan tidak bisa digunakan,
  apabila Anda ingin melakukan _unstake_ maka akan terealisasikan setelah berakhir masa tunggu
  tersebut.
- **payment destination** - adalah akun yang akan dijadikan sebagai penerima **rewards** nantinya.

![payment destination](https://i.imgur.com/YSW02Zs.png)

**KETERANGAN:**

- **Stash account (increase the amount at stake)** - apabila Anda memilih ini maka setiap
  **rewards** yang didapatkan akan ditransfer ke akun _stash_ dan akan meningkatkan jumlah
  _stake_-nya secara otomatis (terkunci).
- **Stash account (do not increase the amount at stake)** - _rewards_ akan ditransfer ke akun
  _stash_ namun tidak meningkatkan jumlah _stake_-nya, artinya tidak dikunci dan bisa digunakan.
- **Controller account** - _rewards_ akan ditransfer ke kaun _controller_ dan tidak meningkatkan
  nilai _stake_-nya.
- **Specified payment account** - _rewards_ akan ditransfer ke akun tertentu yang dipilih oleh Anda
  selain _stash_ dan _controller_.

Selanjutnya klik **Next** dan akan muncul jendela berikut:

![Nominator select candidate](https://i.imgur.com/YkLLjtG.png)

Pada bagian ini Anda perlu memilih validator mana Anda akan men-_stake_ ARA-nya, bisa lebih dari
satu akun, pilihlah yang terbaik karena men-_stake_ ARA memiliki resiko yang sama dengan validator
yakni apabila validator mesin-nya tidak reliable atau sering mati maka akan berpengaruh terhadap
_rewards_ Anda. Dan pilihlah validator yang menetapkan nilai komisi rendah untuk _rewards_ yang
optimal.

Setelah Anda selesai memilih, klik **Bond & Nominate**.

Setelah berhasil Anda akan masuk ke _Waiting list_ di mana akun Anda akan diproses menjadi nominator
dalam 24 jam (1 era).
