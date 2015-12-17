"use strict";

import co from "co";
require("babel-polyfill");

function delay(msec){
  return new Promise((resolve) => {
    console.log(`wait ${msec} msec`);
    setTimeout(() => {
      resolve(`done waiting ${msec} msec`);
    }, msec);
  });
}

co(function *(){
  let result = yield delay(1000);
  console.log(result);
  let result2 = yield delay(3000);
  console.log(result2);
});

console.log("running");
