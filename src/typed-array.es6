"use strict";

var arr = new Uint8Array(8);
console.log(arr);

arr[0] = 100;
arr[1] = 255;
arr[2] = 256; // fail
arr[3] = "a"; // fail
arr[4] = -1; // 255
arr[5] = -2; // 254

for(var i of arr){
  console.log(i);
}

// convert Uint8Array -> Array
console.log(Array.prototype.slice.call(arr));
