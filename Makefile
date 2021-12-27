# setup
install-dev: _npm_strict
	npm install

# tests
test:
	npm run test

test-ci:
	npm run test-ci

# style
prettier:
	npm run prettier

eslint:
	npm run eslint

check-style:
	npm run eslint && npm run prettier-check

check-style-ci: check-style
