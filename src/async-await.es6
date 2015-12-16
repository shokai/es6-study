"use strict";

require("babel-polyfill");

function foo(wait = 1000){
  return new Promise((resolve) => {
    console.log(`wait ${wait} msec`);
    setTimeout( ()=>{
      resolve(`done waiting ${wait} msec`);
    }, wait);
  });
}

(async function(){
  let result = await foo(1000);
  console.log(result);
  let result2 = await foo(3000);
  console.log(result2);
})();
