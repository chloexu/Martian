#!/bin/bash

echo "Cleaning up build directory..."
rm -r -f build

echo "Making new build directory..."
mkdir build
cd build

echo "Copying files..."
cp -R ../package.json ./
cp -R ../dist/* ./
# optional only if not using layer
cp -R ../node_modules ./
cp -R ../appspec.yml ./

echo "Zipping files..."
zip -r ../sb-status-service.zip .
cd ../
