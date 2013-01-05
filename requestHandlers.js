/*
function sleep(milliSeconds){
  var startTime=new Date().getTime();
  while(new Date().getTime() < startTime + milliSeconds);
}
*/
var querystring=require("querystring");
var exec=require("child_process").exec;

function home(response, postData){
  console.log("request handler 'home' was called.");
  exec("find /home/hd-user/github/", function(error, stdout, stderr){
  
    response.writeHead(200,{"Content-Type": "text/plain"});
    response.write("Hello, World!\n");
    response.write(stdout);
    response.write("\nit is over!\n");
    response.end();
  });
}

function start(response, postData){
  console.log("request handler 'start' was called.");
 
  //sleep(10000);

  var body="<!DOCTYPE html>"+
           "<html>"+

           "<head>"+
           "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />"+
           "<title>start page</title>"+
           "</head>"+
           "<body>"+
           "<form action='/upload' method='post'>"+
           "<textarea rows='30' cols='40' name='text'></textarea>"+
           "<br/><input type='text' name='name' />"+
           "<br/><input type='submit' value='submit text' />"+
           "</form>"+
           "</body>"+ 
           "</html>";

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();

}

function upload(response, postData){
  console.log("request handler 'upload' was called.");
  
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write("You've sent: "+querystring.parse(postData).text);
  response.end();
}

exports.home=home
exports.start=start;
exports.upload=upload;
