.PHONY: build-frontend-dev build-server-dev dev-server

SERVER_PORT ?= 3000
API_SERVER_PORT ?= 3001

build-frontend-dev:
	yarn run webpack --mode development --config webpack/dev.config.js

build-server-dev:
	yarn run tsc

dev-server: build-frontend-dev build-server-dev
	SERVER_ENV=dev \
		SERVER_PORT=$(SERVER_PORT) \
 		API_SERVER_PORT=$(API_SERVER_PORT) \
  	node ./dist/server.js
