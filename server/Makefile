.PHONY: build dev prod-server

API_SERVER_PORT ?= 3001

lint:
	yarn run tslint -c tslint.json 'src/**/*.ts'

build:
	yarn install
	yarn run tsc

dev-server: build
	API_SERVER_PORT=$(API_SERVER_PORT) NODE_ENV=development node ./dist/server.js

prod-server: build
	API_SERVER_PORT=$(API_SERVER_PORT) NODE_ENV=production node ./dist/server.js
