// フィボナッチ数列をどんどん生成してゆっくりprintする

var calc = function*(){
  var fibs = [0,1,1];
  while(true){
    yield fibs[2];
    fibs.shift();
    fibs.push(fibs[0]+fibs[1]);
  }
};

var it = calc();
while(true){
  var res = it.next();
  console.log(res.value);
}
