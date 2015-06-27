// フィボナッチ数列をどんどん生成してprintする

"use strict";

var fibGenerator = function*(){
  var fibs = [0, 1, 1];
  while(fibs[2] < Infinity){
    yield fibs[2];
    fibs.shift();
    fibs.push(fibs[0] + fibs[1]);
  }
};

for(let i of fibGenerator()){
  console.log(i);
}
