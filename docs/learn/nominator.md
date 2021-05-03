---
id: nominator
title: Nominator
sidebar_label: Nominator
---

Nominator adalah individu yang ingin ikut berpartisipasi dalam mengamankan jaringan tanpa menjadi validator. Berbeda dengan validator, nominator tidak memerlukan mesin untuk melakukan validasi blok. Tetapi bisa menggunakan token yang dimiliki untuk membantu memperkuat validator lain agar kuat terpilih dan mudah masuk ke dalam jajaran validator. Sebagai imabalannya, nominator akan mendapatkan token ARA sesuai dengan prosentase bagi hasil yang diset oleh validator.

## Cara Menjadi Nominator

Untuk menjadi nominator Anda perlu [membuat akun](learn-account.md) terlebih dahulu.

Buka [Nuchain Dashboard](https://dashboard.nuchain.network) lalu pilih menu `Network` > `Staking` > `Account actions` lalu klik tombol `Nominator`

Pada jendela nominator tampak beberapa input yang perlu diisi:

![Nominator](https://i.imgur.com/z3ZlnIg.png)


* **stash account** - adalah akun yang akan dijadikan sebagai *holding* dari proses nominasi, akun ini bukan digunakan untuk transaksi harian tetapi hanya untuk menghandle proses nominasi, dimana Anda bisa menggunakan akun ini untuk meningkatkan jumlah *stake* dari setiap *rewards* yang didapatkan.
* **controller account** - adalah akun yang mengontrol *Stash Account*. Ini boleh sama dengan yang akan digunakan sebagai *stash account*, namun direkomendasikan dibedakan.
* **value bonded** - adalah jumlah ARA yang akan di-*stake*, jangan memasukkan semua yang ARA yang Anda miliki, terutama apabila *stash* dan *controller account* sama maka Anda tidak bisa melakukan *payout* untuk menarik *rewards* dikemudian hari, karena untuk menarik *rewards* perlu ARA sebagai *fee*-nya.
* **on-chain bonding duration** - adalah masa tunggu *stake* akan dikunci dan tidak bisa digunakan, apabila Anda ingin melakukan *unstake* maka akan terealisasikan setelah berakhir masa tunggu tersebut.
* **payment destination** - adalah akun yang akan dijadikan sebagai penerima **rewards** nantinya.

![payment destination](https://i.imgur.com/YSW02Zs.png)

**KETERANGAN:**
* **Stash account (increase the amount at stake)** - apabila Anda memilih ini maka setiap **rewards** yang didapatkan akan ditransfer ke akun *stash* dan akan meningkatkan jumlah *stake*-nya secara otomatis (terkunci).
* **Stash account (do not increase the amount at stake)** - *rewards* akan ditransfer ke akun *stash* namun tidak meningkatkan jumlah *stake*-nya, artinya tidak dikunci dan bisa digunakan.
* **Controller account** - *rewards* akan ditransfer ke kaun *controller* dan tidak meningkatkan nilai *stake*-nya.
* **Specified payment account** - *rewards* akan ditransfer ke akun tertentu yang dipilih oleh Anda selain *stash* dan *controller*.

Selanjutnya klik **Next** dan akan muncul jendela berikut:

![Nominator select candidate](https://i.imgur.com/YkLLjtG.png)

Pada bagian ini Anda perlu memilih validator mana Anda akan men-*stake* ARA-nya, bisa lebih dari satu akun, pilihlah yang terbaik karena men-*stake* ARA memiliki resiko yang sama dengan validator yakni apabila validator mesin-nya tidak reliable atau sering mati maka akan berpengaruh terhadap *rewards* Anda. Dan pilihlah validator yang menetapkan nilai komisi rendah untuk *rewards* yang optimal.

Setelah Anda selesai memilih, klik **Bond & Nominate**.

Setelah berhasil Anda akan masuk ke *Waiting list* di mana akun Anda akan diproses menjadi nominator dalam 24 jam (1 era).

