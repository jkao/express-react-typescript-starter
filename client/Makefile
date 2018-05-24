.PHONY: build-frontend-dev build-server-dev dev-server build

FRONTEND_SERVER_PORT ?= 3000

API_SERVER_PORT ?= 3001
API_SERVER_HOST ?= http://localhost:$(API_SERVER_PORT)

lint:
	yarn run tslint -c tslint.json 'src/**/*.{ts,tsx}'

build-frontend-dev:
	yarn run webpack --mode development --config webpack/dev.config.js

build-server:
	yarn run tsc

build-dev: build-frontend-dev build-server

dev-server: build-dev
	NODE_ENV=development \
		FRONTEND_SERVER_PORT=$(FRONTEND_SERVER_PORT) \
 		API_SERVER_HOST=$(API_SERVER_HOST) \
  	node ./dist/server.js

build-frontend-prod:
	yarn run webpack --mode production --config webpack/prod.config.js

build-prod: build-frontend-prod build-server

prod-server: build-prod
	NODE_ENV=production \
		FRONTEND_SERVER_PORT=$(FRONTEND_SERVER_PORT) \
 		API_SERVER_HOST=$(API_SERVER_HOST) \
  	node ./dist/server.js
