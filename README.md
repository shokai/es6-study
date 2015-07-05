# es6-study

- https://github.com/shokai/es6-study
- https://shokai-es6-study.herokuapp.com/

[![Circle CI](https://circleci.com/gh/shokai/es6-study.svg?style=svg)](https://circleci.com/gh/shokai/es6-study)

## Note
- convert es6 to es5 with [babel](https://babeljs.io/)
- use `babel-node` comamnd to run es6 directry
- [js2-mode.el](https://github.com/mooz/js2-mode) supports es6 syntax
- https://github.com/lukehoban/es6features


## Install Dependencies

    % npm install


## Build

compile es6

    % npm run build
    # or
    % npm run watch

## Run

    % node dist/forof.js  # compiled js
    % iojs src/quiz_fib.es6  # run es6
    % babel-node src/class-eventemitter.es6 # run es6

### for Web browser

    % npm run server

=> http://localhost:3000


## Test

    % npm test

