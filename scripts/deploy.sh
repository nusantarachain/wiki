#!/usr/bin/env bash

rsync -avzrhcP -e "ssh -i ~/.ssh/id_ecdsa_sec" --omit-dir-times ./website/build/nuchain-wiki/ root@$DEPLOY_SERVER:/home/www/nuchain-wiki
ssh -i ~/.ssh/id_ecdsa_sec root@$DEPLOY_SERVER chown -R www-data:www-data /home/www/nuchain-wiki
