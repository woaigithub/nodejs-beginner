function sleep(milliSeconds){
  var startTime=new Date().getTime();
  while(new Date().getTime() < startTime + milliSeconds);
}

function home(){
  console.log("request handler 'home' was called.");
  return "hello, world";
}

function start(){
  console.log("request handler 'start' was called.");
  
  sleep(10000);

  return "hello, start";
}

function upload(){
  console.log("request handler 'upload' was called.");
  return "hello, upload";
}

exports.home=home
exports.start=start;
exports.upload=upload;
