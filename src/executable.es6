#!/usr/bin/env 6to5-node
'use strict';

var foo = (a, b) => {

  return a + b;
}

console.log('this is an executable es6 file');
console.log(foo(3,4));
