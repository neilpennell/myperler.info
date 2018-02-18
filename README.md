# myperler.info

prototype an AWS Serverless CRUD app

A simple S3 web front end that talks to a single lambda via 
api gateway that says hello world!

## approach



## tools

cim.sh


## procedures

* npm -g install cim
* cim create --template=serverless-api api
* export AWS_REGION=us-east-1 
* cim stack-up --recursive --profile=myperler.info
* cim stack-show --recursive --profile=myperler.info
* cim lambda-deploy --recursive --profile=myperler.info
* cim stack-delete --recursive --profile=myperler.info


