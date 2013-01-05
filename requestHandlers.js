/*
function sleep(milliSeconds){
  var startTime=new Date().getTime();
  while(new Date().getTime() < startTime + milliSeconds);
}
*/

var exec=require("child_process").exec

function home(response){
  console.log("request handler 'home' was called.");
  exec("find /home/hd-user/github/", function(error, stdout, stderr){
  
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("Hello, World!\n");
    response.write(stdout);
    response.write("\nit is over!\n");
    response.end();
  });
}

function start(response){
  console.log("request handler 'start' was called.");
 
  //sleep(10000);

  var content="empty";
  exec("find /", function(error, stdout, stderr){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write(stdout);
    response.end();
  });

  return content;
}

function upload(response){
  console.log("request handler 'upload' was called.");
  
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write("Hello upload!");
  response.end();
}

exports.home=home
exports.start=start;
exports.upload=upload;
