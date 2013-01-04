var http=require("http");
var url= require("url");

function start(route){

  function onRequest(request, response){
    var pathname=url.parse(request.url).pathname;
    console.log("Request for "+pathname+" received.");

    route(pathname);
    console.log(request.headers["user-agent"]);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello, world!");
    response.end();
  }

http.createServer(onRequest).listen(8888);

console.log("server has started.");
}

exports.begin=start;
