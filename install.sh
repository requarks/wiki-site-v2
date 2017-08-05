#!/bin/bash

VERSION=1.0.4
bold=$(tput bold)
normal=$(tput sgr0)

echo -e " __    __ _ _    _    _     \n/ / /\\ \\ (_) | _(_)  (_)___ \n\\ \\/  \\/ / | |/ / |  | / __| \n \\  /\\  /| |   <| |_ | \\__ \\ \n  \\/  \\/ |_|_|\\_\\_(_)/ |___/ \n                   |__/\n   < INSTALL >\n"

echo "-> Fetching latest build..."
curl -L -s -S https://github.com/Requarks/wiki/releases/download/v$VERSION/wiki-js.tar.gz | tar xz -C .

echo "-> Fetching dependencies..."
mkdir -p ./node_modules
curl -L -s -S https://github.com/Requarks/wiki/releases/download/v$VERSION/node_modules.tar.gz | tar xz -C ./node_modules

echo "-> Creating config file..."
cp -n config.sample.yml config.yml

echo -e -n "-> ${bold}Start the configuration wizard?${normal} (y/n) "
old_stty_cfg=$(stty -g)
stty raw -echo ; answer=$(head -c 1) ; stty $old_stty_cfg
if echo "$answer" | grep -iq "^y" ;then
  node wiki configure
else
  echo -e "-> Installation Complete\n\nStart Wiki.js using command: ${bold}node wiki start\n"
fi
