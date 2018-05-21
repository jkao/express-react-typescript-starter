.PHONY: build

build:
	make -C server build
	make -C client build
