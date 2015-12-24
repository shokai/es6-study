/*eslint no-unused-vars: 0*/
"use strict";

var foo = "foo!";
if(true){
  let foo = "bar!";
  console.log(foo);
}
console.log(foo);

if(true){
  let name = "shokai";
}
// console.log(name);

for(let i = 0; i < 10; i++){
  setTimeout(function(){
    console.log(i);
  }, 500);
}
