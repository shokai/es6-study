"use strict";

var storage = new class Storage {

  constructor(){
    this.data = [];
  }

  get isEmpty(){
    return this.data.length < 1;
  }

  add(obj){
    this.data.push(obj);
  }

  remove(obj){
    this.data.splice(this.data.indexOf(obj), 1);
  }

  removeAll(...arr){ // 可変長引数
    for(var i = 0; i < arr.length; i++){
      this.remove(arr[i]);
    }
  }
};

console.log(storage.isEmpty);
storage.add("kazusuke");
storage.add("marutaka");
storage.add("zanmai");
console.log(storage.data);

storage.remove("marutaka");
console.log(storage.data);
console.log(storage.isEmpty);

storage.removeAll("kazusuke", "marutaka", "zanmai");
console.log(storage.isEmpty);
