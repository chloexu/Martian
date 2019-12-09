#!/bin/bash

echo "Cleaning up build directory..."
rm -r -f build

echo "Making new build directory..."
mkdir build
cd build

echo "Copying files..."
cp -R ../dist/* ./

echo "Zipping files..."
zip -r ../sb-status-service.zip .
cd ../
