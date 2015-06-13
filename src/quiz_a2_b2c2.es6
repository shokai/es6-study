// a^2 == b^2+c^2となるような整数を順に求めよ

"use strict";

var calcGenerator = function*(first = 2, last = 100){
  for(var a = first; a < last; a++){
    for(var b = 2; b < a; b++){
      for(var c = 1; c < b; c++){
        if(a * a === (b * b + c * c)){
          yield `${a}^2 == ${b}^2+${c}^2`;
        }
      }
    }
  }
};

var it = calcGenerator(3, 50);
var res;

while( !(res = it.next()).done ){
  console.log(res.value);
}
