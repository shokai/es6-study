'use strict';

var events = require('events').EventEmitter;

class User extends events{ // class宣言、mix-inによる継承
  constructor(name){
    super();
    this.name = name;
  }

  say(){
    console.log(`my name is ${this.name}`); // テンプレート文字列
  }
}

var user = new User('shokai');
user.say();

user.on('hit', (n=1) => { // 引数の初期値が設定できる
  console.log('ouch!'.repeat(n));
});

user.emit('hit');
user.emit('hit', 3);
