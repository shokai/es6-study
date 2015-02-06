# es6-study

- https://github.com/shokai/es6-study


## Install Dependencies

    % npm install
    % npm install 6to5 -g


## Note

- node.js 0.10.x
- convert es6 to es5 with [6to5](https://6to5.org/)
- use `6to5-node` comamnd to run es6 directry
- [js2-mode.el](https://github.com/mooz/js2-mode) supports es6 syntax

### Watch `src/*.es6` and build

    % npm run watch


### Run es6 file

    % 6to5-node src/class-eventemitter.es6
