.PHONY: build dev prod-server

SERVER_PORT ?= 3000

build:
	yarn install
	yarn run tsc

dev-server: build
	SERVER_PORT=$(SERVER_PORT) SERVER_ENV=dev node ./dist/server.js

prod-server: build
	SERVER_PORT=$(SERVER_PORT) SERVER_ENV=prod node ./dist/server.js
