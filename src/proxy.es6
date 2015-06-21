"use strict";

class User{
  constructor(name){
    this.name = name;
  }
}

var handler = {
  get(target, name, receiver){
    console.log(`proxy get ${name}`);
  }
};

var user = new Proxy(new User("shokai"), handler);

console.log(user.name);
