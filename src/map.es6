// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
"use strict";

class User {
  constructor(name){
    this.name = name;
  }
  toString(){
    return `${this.name}`;
  }
}

var map = new Map();

var user = new User("shokai");
map.set(user, "http://shokai.org"); // object key
console.log(map.has(user));
console.log(map.get(user));

console.log(user === new User("shokai")); // false, different object
console.log(map.get(new User("shokai"))); // undefined

map.set(new User("zakuni"), "http://ozawakun.io");
map.set(new User("github"), "https://github.com/shokai");

for(let [k, v] of map){
  console.log(`${k} => ${v}`);
}
