
// 几个路径
console.log( __filename ); // 当前文件的绝对路径
console.log( __dirname ); // 当前执行脚本所在的目录



// process 是一个全局变量，即 global 对象的属性。
// 描述当前Node.js 进程状态的对象 
// console.log(process);
 // 数组形式，argv[0] ---> node  argv[1] ---> 脚本文件名  argv[2...] --> 脚本文件的参数
// console.log(process.argv);
// 当前环境的变量
// console.log(process.env)

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);