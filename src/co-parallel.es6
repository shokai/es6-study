"use strict";

import co from "co";
require("babel-polyfill");

function delay(msec){
  return new Promise((resolve, reject) => {
    console.log(`wait ${msec} msec`);
    setTimeout(() => {
      resolve(`done waiting ${msec} msec`);
    }, msec);
  });
}

co(function *(){
  const results = yield [delay(1000), delay(2000)];
  console.log(results);
  const results2 = yield {1: delay(500), 2: delay(3000)};
  console.log(results2);
});

console.log("running");
