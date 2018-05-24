.PHONY: build dev-servers lint

lint:
	make -C server lint
	make -C client lint

build-dev:
	make -C server build
	make -C client build-dev

build-prod:
	make -C server build
	make -C client build-prod

dev-servers:
	concurrently --names "API,FRONTEND" 'make -C server dev-server' 'make -C client dev-server'

prod-servers:
	concurrently --names "API,FRONTEND" 'make -C server prod-server' 'make -C client prod-server'
