// 事件机制和异步IO模型
// var http = require('http');
// http.createServer(function(request, response){
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello World');
// }).listen(8888);
// console.log('Server running at http://127.0.0.1:8888/');


// 文件异步和同步读取
// var fs = require('fs');
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('程序执行完成')

// fs.readFile('input.txt', function(err,data){
//   if(err) return console.error(err);
//   console.log(data.toString())
// })