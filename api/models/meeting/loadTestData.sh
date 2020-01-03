#!/bin/sh

BASE_URL=https://api.myperler.info/meetings-v1/meetings
API_KEY='--header x-api-key:ljOnBxNfWY2c7zz1VNS7R9Gj604K8bIC2AuiizDf'

echo "Load data"
D=`date +'%s'`
curl -X POST $BASE_URL --data '{"title":"meeting 1", "date_occured":"'$D'", "attendees":[{"id":"a1", "name":"first last 1", "email":"first.last@gmail.com"},{"id":"a2", "name":"first last 2", "email":"first.last2@gmail.com"}, {"id":"a3", "name":"first last 3", "email":"first.last3@gmail.com"}], "discussions":[{"id":"d1", "title":"discussion 1", "description":"detail discussion 1"}, {"id":"d2", "title":"discussion 2", "description":"detail discussion 2"}, {"id":"d3", "title":"discussion 3", "description":"detail discussion 3"}], "decisions":[{"id":"D1", "title":"Decision 1", "description":"detail Decision 1"}, {"id":"D2", "title":"Decision 2", "description":"detail Decision 2"}, {"id":"D3", "title":"Decision 3", "description":"detail Decision 3"}], "actions":[{"id":"m1", "title":"meeting title 1", "description": "meeting description 1", "due_date":"'$D'", "owner_id":"o1", "task_list": []},{"id":"m2", "title":"meeting title 2", "description": "meeting description 2", "due_date":"'$D'", "owner_id":"o2", "task_list": []},{"id":"m3", "title":"meeting title 3", "description": "meeting description 3", "due_date":"'$D'", "owner_id":"o3", "task_list": []}]}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"meeting 2"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"meeting 3"}' $API_KEY
# curl -X POST $BASE_URL --data '{"title":"meeting 4"}' $API_KEY
curl -X POST $BASE_URL --data '{"title":"meeting 5", "date_occured":"'$D'", "attendees":[{"id":"a1", "name":"first last 1", "email":"first.last@gmail.com"},{"id":"a2", "name":"first last 2", "email":"first.last2@gmail.com"}, {"id":"a4", "name":"first last 4", "email":"first.last4@gmail.com"}], "discussions":[{"id":"d4", "title":"discussion 4", "description":"detail discussion 4"}, {"id":"d5", "title":"discussion 5", "description":"detail discussion 5"}, {"id":"d6", "title":"discussion 6", "description":"detail discussion 6"}], "decisions":[{"id":"D4", "title":"Decision 4", "description":"detail Decision 4"}, {"id":"D5", "title":"Decision 5", "description":"detail Decision 5"}, {"id":"D6", "title":"Decision 6", "description":"detail Decision 6"}], "actions":[{"id":"m4", "title":"meeting title 4", "description": "meeting description 4", "due_date":"'$D'", "owner_id":"o5", "task_list": []},{"id":"m6", "title":"meeting title 6", "description": "meeting description 6", "due_date":"'$D'", "owner_id":"o6", "task_list": []},{"id":"m7", "title":"meeting title 7", "description": "meeting description 7", "due_date":"'$D'", "owner_id":"o3", "task_list": []}]}' $API_KEY

echo "dump of data"
curl -X GET $BASE_URL $API_KEY

# e2f559d3-88b2-4b12-8528-869dfbb5aef8