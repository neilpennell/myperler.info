#!/bin/sh

BASE_URL=https://api.myperler.info/tasks-v1/tasks
API_KEY='--header x-api-key:sz5LN9aL9Z3Qqq9aDYUCX4EVB3t0pEgv1UWeGaUl'

echo "Load data"
D=`date +'%s'`
curl -X POST $BASE_URL --data '{"title":"task 1", "due_date":"'$D'", "owner":"o1", "action_id":"a1"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"task 2", "due_date":"'$D'", "owner":"o1", "action_id":"a1"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"task 3", "due_date":"'$D'", "owner":"o2", "action_id":"a2"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"task 4", "due_date":"'$D'", "owner":"o3", "action_id":"a3"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"task 5", "due_date":"'$D'", "owner":"o1", "action_id":"a4"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"task 6", "due_date":"'$D'", "owner":"o4", "action_id":"a2"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"task 7", "due_date":"'$D'", "owner":"o2", "action_id":"a3"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"task 8", "due_date":"'$D'", "owner":"o4", "action_id":"a4"}' $API_KEY

echo "dump of data"
curl -X GET $BASE_URL $API_KEY

