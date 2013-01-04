var server= require("./server.js");
var router=require("./router.js");
var requestHandlers=require("./requestHandlers");

var handle={}
handle["/"]=requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.begin(router.route, handle);
