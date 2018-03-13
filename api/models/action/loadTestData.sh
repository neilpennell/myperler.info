#!/bin/sh

BASE_URL=https://api.myperler.info/meetings-v1/actions
API_KEY='--header x-api-key:ljOnBxNfWY2c7zz1VNS7R9Gj604K8bIC2AuiizDf'

echo "Load data"
D=`date +'%s'`
curl -X POST $BASE_URL --data '{"title":"action 1", "due_date":"'$D'", "owner":"owner_id", "tasks":["t1","t2","t3"], "meeting_id":"m1" }' $API_KEY
curl -X POST $BASE_URL --data '{"title":"action 2", "due_date":"'$D'", "owner":"owner_id", "tasks":["t4","t5","t6"], "meeting_id":"m2"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"action 3", "due_date":"'$D'", "owner":"owner_id", "tasks":[], "meeting_id":"m3"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"action 4", "due_date":"'$D'", "owner":"owner_id", "tasks":[], "meeting_id":"m4"}' $API_KEY

echo "dump of data"
curl -X GET $BASE_URL $API_KEY

