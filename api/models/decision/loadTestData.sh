#!/bin/sh

BASE_URL=https://api.myperler.info/decisions-v1/decisions
API_KEY='--header x-api-key:BkV8dqQcJC6U8X4ZIr0539OrSai3NVG71xza5F5D'

echo "Load data"
D=`date +'%s'`
curl -X POST $BASE_URL --data '{"title":"decision 1", "meeting_id":"m1"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"decision 2", "meeting_id":"m2"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"decision 3", "meeting_id":"m3"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"decision 4", "meeting_id":"m4"}' $API_KEY

echo "dump of data"
curl -X GET $BASE_URL $API_KEY

