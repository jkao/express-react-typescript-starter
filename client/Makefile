.PHONY: build-frontend-dev build-server-dev dev-server build

SERVER_PORT ?= 3000
API_SERVER_PORT ?= 3001

build-frontend-dev:
	yarn run webpack --mode development --config webpack/dev.config.js

build-server-dev:
	yarn run tsc

build: build-frontend-dev build-server-dev

dev-server: build
	SERVER_ENV=dev \
		SERVER_PORT=$(SERVER_PORT) \
 		API_SERVER_PORT=$(API_SERVER_PORT) \
  	node ./dist/server.js
