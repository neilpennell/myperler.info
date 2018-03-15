#!/bin/sh

BASE_URL=https://api.myperler.info/attendees-v1/attendees
API_KEY='--header x-api-key:gJV8GFyXAz1oqgAHyFWMTagyVyFVWYF7tAHDbkAi'

echo "Load data"
curl -X POST $BASE_URL --data '{"name":"user 1"}' $API_KEY
curl -X POST $BASE_URL --data '{"name":"user 2"}' $API_KEY
curl -X POST $BASE_URL --data '{"name":"user 3"}' $API_KEY
curl -X POST $BASE_URL --data '{"name":"user 4"}' $API_KEY

echo "dump of data"
curl -X GET $BASE_URL $API_KEY

