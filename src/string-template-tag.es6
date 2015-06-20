"use strict";

var user = "shokai";

console.log(
gyazz`[[test]]
asdf
[[${user}]]`
);

function gyazz(templates, ...values){
  console.log("---gyazz markup start---");
  var reg = /\[{2}([^\[\]]+)\]{2}/g;
  var str = "";
  for(var i = 0; i < templates.length; i++){
    str += templates[i] || "";
    str += values[i] || "";
  }
  if(!reg.test(str)){
    return str;
  }
  return str.replace(reg, "<a href=\"./$1\">$1</a>");
}

