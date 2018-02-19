# myperler.info

prototype an AWS Serverless CRUD app

A simple S3 web front end that talks to a single lambda via 
api gateway that says hello world!

## approach



## tools

serverless


## procedures

* npm -g install serverless
* sls create --template aws-nodejs --path attendee
* sls create_domain
* aws acm request-certificate --domain-name api.myperler.info --validation-method DNS
* sls deploy


## references

* solving the CORS problem
  * https://github.com/shekhargulati/hands-on-serverless-guide/blob/master/01-aws-lambda-serverless-framework/04-enable-cors-for-your-rest-api.md


