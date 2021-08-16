---
id: docker
title: Using Docker
sidebar_label: Docker
---

The fastest way to run Nuchain nodes apart from using prebuilt binaries is to use Docker. Here are steps to run Nuchain Node using Docker.

Pull the latest Nuchain docker image:

``` bash
$ docker pull anvie/nuchain:latest
```

Run:

``` bash
$ docker run --rm \
  -v '/var/data/nuchain:/data' \
  -p '9933:9933' \
  -p '9944:9944' \
  -p '30333:30333' \
   --name nuchain anvie/nuchain:latest \
   nuchain --base-path=/data\
   --ws-externals \
   --rpc-externals \
   --rpc-methods=Unsafe
```

If you want to run a docker container as a service, you can use the following systemd configuration:

```
# Systemd service configuration for Nuchain docker container.
# edit as you wish.

[Units]
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
ExecStart=/usr/bin/docker run --rm -v '/var/data:/data' -p '9933:9933' -p '9944:9944' -p '30333:30333' --name nuchain anvie/ nuchain:latest nuchain --validator --base-path=/data --ws-external --rpc-external --rpc-methods=Unsafe

[Install]
WantedBy=multi-user.target
```

Save the above configuration to the file `/etc/systemd/system/nuchain.service` and type:

``` bash
$ systemctl systemctl daemon-reload
$ systemctl enable nuchain
$ systemctl start nuchain
```