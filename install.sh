#!/bin/bash

VERSION=1.0.4
bold=$(tput bold)
green=$(tput setaf 2)
normal=$(tput sgr0)

echo -e " __    __ _ _    _    _     \n/ / /\\ \\ (_) | _(_)  (_)___ \n\\ \\/  \\/ / | |/ / |  | / __| \n \\  /\\  /| |   <| |_ | \\__ \\ \n  \\/  \\/ |_|_|\\_\\_(_)/ |___/ \n                   |__/\n   < INSTALL >\n"

echo "-> Fetching latest build..."
curl -L -s -S https://github.com/Requarks/wiki/releases/download/v$VERSION/wiki-js.tar.gz | tar xz -C .

echo "-> Fetching dependencies..."
mkdir -p ./node_modules
curl -L -s -S https://github.com/Requarks/wiki/releases/download/v$VERSION/node_modules.tar.gz | tar xz -C ./node_modules

echo "-> Creating config file..."
cp -n config.sample.yml config.yml

echo -e "-> ${green}Installation Complete\n"

echo -e ">> Launch configuration wizard: ${bold}node wiki configure"
echo -e ">> Start Wiki.js server: ${bold}node wiki start\n"
