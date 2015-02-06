'use strict'

var storage = new class Storage {
  constructor(){
    this.data = [];
    this.__defineGetter__('isEmpty', function(){
      return this.data.length < 1;
    });
  }
  add(obj){
    this.data.push(obj);
  }
  remove(obj){
    this.data.splice(this.data.indexOf(obj), 1);
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
