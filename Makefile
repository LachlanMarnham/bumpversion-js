# setup
install-dev:
	npm install

# tests
test:
	npm run test

test-ci:
	npm run test-ci

# style
prettier: _npm_strict
	npm run prettier
