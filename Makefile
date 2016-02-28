starjs := bhopping/application/*.js

lint: node_modules
	- node_modules/.bin/jshint ${starjs}
	- node_modules/.bin/jscs ${starjs}

node_modules: package.json
	npm install
