const fs = require('fs');
const first=fs.readFileSync('./content/first.txt');
const second=fs.readFileSync('./content/second.txt','utf-8')
console.log(first);
console.log(second);
fs.writeFileSync('./content/write-sync.txt',`Here is the result ${first} \n ${second}`,{flag:'a'})