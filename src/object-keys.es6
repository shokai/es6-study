"use strict";

var components = {
  controller: [ "main", "auth" ],
  model: [ "user", "book" ]
};

for(let type in components){
  console.log(type);
  for(let component of components[type]){
    console.log(`${type}/${component}`);
  }
}


var arr = ["shokai", "zanmai", "kazusuke"];
for(let i of arr){
  console.log(i);
}
