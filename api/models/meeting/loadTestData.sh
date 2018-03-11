#!/bin/sh

BASE_URL=https://api.myperler.info/meetings-v1/meetings
API_KEY='--header x-api-key:ljOnBxNfWY2c7zz1VNS7R9Gj604K8bIC2AuiizDf'

echo "Load data"
curl -X POST $BASE_URL --data '{"title":"meeting 1", "date_occured":"3/4/18"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"meeting 2"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"meeting 3"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"meeting 4"}' $API_KEY

echo "dump of data"
echo curl -X GET $BASE_URL $API_KEY

