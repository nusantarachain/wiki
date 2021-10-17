---
id: docker
title: Menggunakan Docker
sidebar_label: Docker
---

Cara tercepat menjalankan Nuchain node selain menggunakan prebuilt binary bisa menggunakan Docker.
Berikut adalah cara-cara menjalankan Nuchain Node menggunakan Docker.

Pull latest Nuchain docker image:

```bash
$ docker pull anvie/nuchain:latest
```

Menjalankan:

```bash
$ docker run --rm \
  -v '/var/data/nuchain:/data' \
  -p '9933:9933' \
  -p '9944:9944' \
  -p '30333:30333' \
   --name nuchain anvie/nuchain:latest \
   nuchain --base-path=/data \
   --ws-external \
   --rpc-external \
   --rpc-methods=Unsafe
```

Apabila ingin menjalankan docker container sebagai servis bisa menggunakan konfigurasi systemd
berikut:

```
# Systemd service configuration for Nuchain docker container.
# edit as you wish.

[Unit]
Description=Nuchain Node Container
After=docker.service
Requires=docker.service

[Service]
Type=simple
Restart=always
RestartSec=5
StartLimitBurst=5
LimitNOFILE=10000
ExecStartPre=-/usr/bin/docker stop nuchain
ExecStartPre=-/usr/bin/docker rm nuchain
ExecStart=/usr/bin/docker run --rm -v '/var/data/nuchain:/data' -p '9933:9933' -p '9944:9944' -p '30333:30333' --name nuchain anvie/nuchain:latest nuchain --validator --base-path=/data --ws-external --rpc-external --rpc-methods=Unsafe

[Install]
WantedBy=multi-user.target
```

Simpan konfigurasi di atas ke file `/etc/systemd/system/nuchain.service` lalu ketikkan:

```bash
$ systemctl daemon-reload
$ systemctl enable nuchain
$ systemctl start nuchain
```
