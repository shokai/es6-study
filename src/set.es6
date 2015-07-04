// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
"use strict";

var set = new Set(["kazusuke", "zanmai"]);

console.log(set.has("kazudon"));
set.add("kazudon");
set.add("zanmai");
console.log(set.has("kazudon"));

for(let i of set){
  console.log(i);
}
