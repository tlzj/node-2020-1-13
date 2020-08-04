var http = require('http');
var url = require('url');
http.createServer((request, response) => {
  var pathname = url.parse(request.url).pathname;
  console.log(request.url, pathname, '===');
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write('Hello World');
  response.end();
}).listen(9992);
console.log('服务启动');
