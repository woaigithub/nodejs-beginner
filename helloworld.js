function say(msg){
  console.log(msg);
}

function execute(callback, value){
  callback(value);
}

execute(say,"hello, world");

execute(function(word){
  console.log(word);
}, "i love you, my wife");
