// 小文件拷贝
const fs = require('fs');
function copyFile(src, dst){
  // fs.writeFileSync(dst, fs.readFileSync(src)); // 对于大文件的读取写入，会出现内存问题
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main(argv){
  copyFile(argv[0], argv[1]);
}
main(process.argv.slice(2));