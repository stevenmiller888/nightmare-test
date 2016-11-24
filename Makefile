
# Check if xvfb is running
XVFB_RUNNING = $(shell pgrep "Xvfb" > /dev/null; echo $$?)
# Set the circle project name if not set
CIRCLE_PROJECT_REPONAME ?= 1
# Set headless if not set
HEADLESS ?= 1

# If this build is not on Circle, is not headless, and xvfb is
# not already running, run Ava as usual. Otherwise, run Ava
# under the xvfb wrapper.
test: node_modules
ifeq ($(CIRCLE_PROJECT_REPONAME)$(HEADLESS)$(XVFB_RUNNING), 111)
	node_modules/.bin/ava
else
	./test/bb-xvfb node_modules/.bin/ava
endif

node_modules: package.json
	npm install
	touch $@

.PHONY: test
