
.PHONY: clean


#install: action/node_modules/.deploy action/.serverless/.deploy attendee/node_modules/.deploy attendee/.serverless/.deploy decision/node_modules/.deploy decision/.serverless/.deploy discussion/node_modules/.deploy discussion/.serverless/.deploy meeting/node_modules/.deploy meeting/.serverless/.deploy task/node_modules/.deploy task/.serverless/.deploy user/node_modules/.deploy user/.serverless/.deploy

install: packages deploy


deploy: action/.serverless/.deploy attendee/.serverless/.deploy decision/.serverless/.deploy discussion/.serverless/.deploy meeting/.serverless/.deploy task/.serverless/.deploy user/.serverless/.deploy


packages: action/node_modules/.deploy attendee/node_modules/.deploy decision/node_modules/.deploy discussion/node_modules/.deploy meeting/node_modules/.deploy task/node_modules/.deploy user/node_modules/.deploy

clean:
	rm -rf action/node_modules action/package-lock.json
	rm -rf attendee/node_modules attendee/package-lock.json
	rm -rf decision/node_modules decision/package-lock.json
	rm -rf discussion/node_modules discussion/package-lock.json
	rm -rf meeting/node_modules meeting/package-lock.json
	rm -rf task/node_modules task/package-lock.json
	rm -rf user/node_modules user/package-lock.json

action/node_modules/.deploy: action/package.json
	$(MAKE) -C action node_modules/.deploy

action/.serverless/.deploy: action/serverless.yml action/create.js action/delete.js action/get.js action/list.js action/update.js
	$(MAKE) -C action .serverless/.deploy

attendee/node_modules/.deploy: attendee/package.json
	$(MAKE) -C attendee node_modules/.deploy

attendee/.serverless/.deploy: attendee/serverless.yml attendee/create.js attendee/delete.js attendee/get.js attendee/list.js attendee/update.js
	$(MAKE) -C attendee .serverless/.deploy

decision/node_modules/.deploy: decision/package.json
	$(MAKE) -C decision node_modules/.deploy

decision/.serverless/.deploy: decision/serverless.yml decision/create.js decision/delete.js decision/get.js decision/list.js decision/update.js
	$(MAKE) -C decision .serverless/.deploy

discussion/node_modules/.deploy: discussion/package.json
	$(MAKE) -C discussion node_modules/.deploy

discussion/.serverless/.deploy: discussion/serverless.yml discussion/create.js discussion/delete.js discussion/get.js discussion/list.js discussion/update.js
	$(MAKE) -C discussion .serverless/.deploy

meeting/node_modules/.deploy: meeting/package.json
	$(MAKE) -C meeting node_modules/.deploy

meeting/.serverless/.deploy: meeting/serverless.yml meeting/create.js meeting/delete.js meeting/get.js meeting/list.js meeting/update.js
	$(MAKE) -C meeting .serverless/.deploy

task/node_modules/.deploy: task/package.json
	$(MAKE) -C task node_modules/.deploy

task/.serverless/.deploy: task/serverless.yml task/create.js task/delete.js task/get.js task/list.js task/update.js
	$(MAKE) -C task .serverless/.deploy

user/node_modules/.deploy: user/package.json
	$(MAKE) -C user node_modules/.deploy

user/.serverless/.deploy: user/serverless.yml user/create.js
	$(MAKE) -C user .serverless/.deploy



