.PHONY: build

build:
	make -C server build
	make -C client build

dev-servers:
	make -C server dev-server & make -C client dev-server && fg
