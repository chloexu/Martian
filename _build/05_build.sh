#!/bin/bash

echo "Cleaning up build directory..."
rm -r -f build

echo "Making new build directory..."
mkdir build
cd build

echo "Copying files..."
cp ../function/src/StreamShift-4f5f65a469fa.json ../function/dist/
cp -R ../function/dist/* ./

echo "Zipping files..."
zip -r ../sb-status-service.zip .
cd ../
