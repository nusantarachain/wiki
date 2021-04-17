#!/bin/bash

node_modules/.bin/prettier -c docs/*.md
if [ $? -eq 1 ]
then
    git config --global user.email "Nuchain-wiki-deploy@users.noreply.github.com"
    git config --global user.name "Nuchain Wiki CI"
    echo "machine github.com login nucbot password $GITHUB_BOT_TOKEN" > ~/.netrc
    node_modules/.bin/prettier -c docs/*.md --write
    git remote set-url origin https://github.com/nusantarachain/nuchain-wiki.git
    ssh-add -D
    ssh-add ~/.ssh/id_rsa_93218110749961b89a5041c875703b1d
    git add -A; git commit -m "Ran prettier"; git push -u origin HEAD;
fi
