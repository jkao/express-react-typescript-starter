.PHONY: build dev prod-server

SERVER_PORT ?= 3000

build:
	npm install
	npx tsc

dev-server:
	SERVER_PORT=$(SERVER_PORT) SERVER_ENV=dev npx ts-node ./src/server.ts

prod-server: build
	SERVER_PORT=$(SERVER_PORT) SERVER_ENV=prod node ./dist/server.js
