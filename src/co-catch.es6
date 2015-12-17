"use strict";

import co from "co";
require("babel-polyfill");

function delay(msec){
  return new Promise((resolve, reject) => {
    console.log(`wait ${msec} msec`);
    let resolveTimer, rejectTimer;
    resolveTimer = setTimeout(() => {
      clearTimeout(rejectTimer);
      resolve(`done waiting ${msec} msec`);
    }, msec);
    rejectTimer = setTimeout(() => {
      clearTimeout(resolveTimer);
      reject("timeout");
    }, 5000); // timeout 5sec
  });
}

co(function *(){
  return yield [delay(1000), delay(10000)]; // 6sec
}).then((results) => {
  console.log(results);
}).catch((err) => {
  console.error("ERROR:" + err);
});

console.log("running");
