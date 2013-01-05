/*
function sleep(milliSeconds){
  var startTime=new Date().getTime();
  while(new Date().getTime() < startTime + milliSeconds);
}
*/
var querystring=require("querystring");
var exec=require("child_process").exec;
var fs=require("fs");
var formidable=require("formidable"),
    http=require("http"),
    util=require("util");

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

  var body="<!DOCTYPE html>"+
           "<html>"+

           "<head>"+
           "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />"+
           "<title>start page</title>"+
           "</head>"+
           "<body>"+
           "<form action='/upload' enctype='multipart/form-data' method='post'>"+
           "<br/><input type='file' name='upload' />"+
           "<br/><input type='submit' value='upload file' />"+
           "</form>"+
           "</body>"+ 
           "</html>";

    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();

}

function upload(response, request){
  console.log("request handler 'upload' was called.");
  
  var form=new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files){
    console.log("parsing done");
    
    fs.rename(files.upload.path, "/tmp/test.png", function(error){
      if(error){
        fs.unlink("/tmp/test.png");
        fs.rename(files.upload.path, "/tmp/test.png");
      }  
    });
    
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response){
  console.log("request handler 'show' was called.");
  fs.readFile("/tmp/test.png", "binary", function(error, file){
    if(error){
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error+"\n");
      response.end();
    }else{
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
  
}
exports.home = home
exports.start = start;
exports.upload = upload;
exports.show = show;
