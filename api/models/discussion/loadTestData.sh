#!/bin/sh

BASE_URL=https://api.myperler.info/discussions-v1/discussions
API_KEY='--header x-api-key:n288MWTLL0a7mqwqYQuPZ1z0JnVibWqM8UtbaMng'

echo "Load data"
D=`date +'%s'`
curl -X POST $BASE_URL --data '{"title":"meeting 1", "date_occured":"'$D'", "attendees":["a1","a2","a3"], "discussions":["d1","d2","d3"], "decisions":["D1","D2","D3"], "actions":["a1","a2","a3"]}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"meeting 2"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"meeting 3"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"meeting 4"}' $API_KEY

echo "dump of data"
curl -X GET $BASE_URL $API_KEY

