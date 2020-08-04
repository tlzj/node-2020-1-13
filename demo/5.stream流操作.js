// var fs = require('fs');
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding('UTF8');
// // 处理流事件 -->  data end and error

// readerStream.on('data', function(chunk){
//   data += chunk;
// })

// readerStream.on('end', function(){
//   console.log(data);
// })

// readerStream.on('error', function(err){
//   console.log(err.stack);
// })

// console.log('执行完成')



// 管道流
// var fs = require('fs');
// // 创建可读流
// var readerStream = fs.createReadStream('input.txt');
// // 创建一个可写流
// var writerStream = fs.createWriteStream('output.txt');

// readerStream.pipe(writerStream);

// console.log('执行完成')


// 链式流，压缩文件案例
// var fs = require('fs');
// var zlib = require('zlib');
// fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
// console.log('执行完成')

// 解压文件案例
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));
  
console.log("文件解压完成。");