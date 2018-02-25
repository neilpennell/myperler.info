
install: node_modules/.deploy .serverless/.deploy

.PHONY: clean

clean:
	rm -rf node_modeles

node_modules/.deploy: package.json
	rm -rf node_modules
	npm install
	touch node_modules/.deploy
	touch serverless.yml

.serverless/.deploy: serverless.yml
	sls deploy --aws-s3-accelerate
	touch .serverless/.deploy
