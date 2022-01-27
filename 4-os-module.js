/*os is a built in module for node js which provides a 
lot of props and functions to interact with the computer 
operating system*/

const os = require('os');
const currentComputer={
    name:os.type(), //returns system name
    release:os.release(),//returns os release
    totalmem:os.totalmem(),//returns total memory in bytes
    freemem:os.freemem()//returns free memory in bytes
}
console.log(currentComputer)