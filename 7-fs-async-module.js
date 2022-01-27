
const {readFile,writeFile}=require('fs');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err.message);
        return;
    }
    const first=result;
    console.log(first)
    readFile('./content/second.txt','ascii',(err,result)=>{
        if(err){
            console.log(err.message);
            return;
        }
        const second =result;
        console.log(second)
        writeFile('./content/write-sync.txt',`${first},${second}`,(err)=>{
            if(err){
                console.log(err.message)
            }
        })
    })
 
})