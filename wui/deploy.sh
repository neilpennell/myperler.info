#!/bin/bash

rm -rf build/
npm run build
aws s3 rm s3://myperler.info/ --recursive
aws s3 sync dist/ s3://myperler.info/

exit 0;

