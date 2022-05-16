---
id: network
title: Jaringan Nuchain
sidebar_label: Jaringan
---

Di Nuchain ada ada dua jaringan: [Mainnet](../general/glossary.md#mainnet) dan
[Testnet](../general/glossary.md#testnet).

Mainnet adalah jaringan utama Nuchain, jaringan ini telah berjalan sejak bulan Februari tahun 2021.
Sementara Testnet adalah jaringan ujicoba yang biasanya digunakan oleh para pengembang untuk
membanun aplikasi di atas jaringan Nuchain.

Baik jaringan Mainnet maupun Testnet berasal dari genesis yang sama:

`0x789d2c1f6bd2948577506b4fa65d8f7c5b821eacc8612d0c86ff6a20994e5649`

## Daftar Nodes

Dan berikut adalah daftar _nodes_ yang dihosting oleh Rantai Nusantara Foundation:

#### Mainnet

- `sg.node.nuchain.network` (Singapura)
- `id.node.nuchain.network` (Indonesia)
- `in.node.nuchain.network` (India)
- `jp.node.nuchain.network` (Jepang)
- `ca.node.nuchain.network` (Kanada)
- `us.node.nuchain.network` (Amerika Serikat)

#### Gama

- `gama.sg.node.nuchain.network` (Singapura)

#### Testnet

- `testnet.nuchain.riset.tech` (Indonesia)
- `satnet-testnet.node.nuchain.network` (Indonesia)

## Lokal

Nuchain bisa juga dijalankan di jaringan intranet lokal tanpa perlu terhubung dengan jaringan utama
(mainnet) maupun jaringan test (testnet). Jaringan lokal ini sangat membantu ketika kita ingin
mencoba sistem secara terisolir dan dengan akun preset yang telah memiliki token.

Untuk menjalankan Nuchain di jaringan lokal kita bisa menjalankan Nuchain dengan parameter `--dev`:

```console
./nuchain --dev
```

Apabila kita ingin _storage_-nya bersifat temporer (hilang ketika restart), yang mana sangat
bermanfaat ketika sedang mengembangkan modul Nuchain di lapisan _runtime_, maka Anda bisa
menjalankannya dengan penambahan parameter `--tmp`:

```console
./nuchain --dev --tmp
```

Tersedia juga pre built docker image apabila Anda ingin menjalankannya di platform yang belum
tersedia pre compiled binary-nya dan tidak mau repot dengan proses kompilasi:

```bash
docker run --rm anvie/nuchain:latest nuchain --dev --tmp
```

## Telemetry

Anda bisa memantau semua aktifitas jaringan Nuchain melalui _telemetry_ di
[telemetry.nuchain.network](https://telemetry.nuchain.network/#/Nuchain).
