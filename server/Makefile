.PHONY: build dev prod-server

build:
	npm install
	npx tsc

dev-server:
	SERVER_ENV=dev npx ts-node ./src/server.ts

prod-server: build
	SERVER_ENV=prod node ./dist/server.js
