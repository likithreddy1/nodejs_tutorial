/* The path module provides utilities for working with
 file and directory paths. It can be accessed using:*/
const path=require('path')
const absolute=path.resolve(__dirname,'content','subfolder','path');
const filepath=path.join('/foo', 'bar', 'baz/asdf', 'quux', '..','..');
console.log(filepath);
// console.log(absolute);
path.win32.join(__dirname,'content','subfolder','text.txt')
// console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
console.log(path.win32.dirname(__dirname));
console.log(path.isAbsolute(''));