// 1.进程(process) 系统进行资源分配和调度的基本单位，是操作系统结构的基础，进程是线程的容器
// 进程之前无法共享数据，只有建立IPC通道后才可以共享数据

// Node.js开启服务进程例子
// const http = require('http');
// const os = require('os');
// const server = http.createServer();
// server.listen(3000, () => {
//   process.title = '建立一个进程';
//   console.log('进程id', process.pid);
//   const cpus = os.cpus();
//   console.log(cpus);
// })


// 2.线程 操作系统能够进行运算调度的最小单位 线程是隶属于进程的，被包含于进程之中
// 一个线程只能隶属于一个进程，但是一个进程是可以拥有多个线程的。

// 3.单线程
// 单线程就是一个进程只开一个线程
// const http = require('http');
// const longComputation = () => {
//   let sum = 0;
//   for(let i = 0; i < 10000000; i++){
//     sum += i;
//   }
//   return sum;
// }
// const server = http.createServer();
// server.on('request', (req, res) => {
//   if(req.url === '/compute'){
//     console.info('计算开始', new Date());
//     const sum = longComputation();
//     console.info('计算结束', new Date());
//     return res.end('Sum is ' + sum);
//   }else{
//     res.end('ok');
//   }
// })
// server.listen(4000);

// Node.js 是 Javascript 在服务端的运行环境，构建在 chrome 的 V8 引擎之上，基于事件驱动、非阻塞I/O模型，
// 充分利用操作系统提供的异步 I/O 进行多任务的执行，适合于 I/O 密集型的应用场景，因为异步，程序无需阻塞等待结果返回，
// 而是基于回调通知的机制，原本同步模式等待的时间，则可以用来处理其它任务，

// nodejs中的进程（process）全局变量，无需require直接使用
// 1）process.env 环境变量，通过process.env.NODE_ENV获取不同环境项目配置信息
// 2)process.pid：获取当前进程id
// 3)process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值

// nodejs进程创建 (有多种创建进程的方法，如child_process模块和cluster模块)
// cpu核心数获取方式: const cpus = require('os).cpus();
