const express=require('express');
const app = express();
app.use(express.json())
let students=[]
app.get('/',function(req,res){
    let data ={
        name:'likith',
        age:20
    }
    res.send(students)
    console.log('data fetched')
})
app.post('/',function(req,res){
    console.log(req.body)
    students.push(req.body)
    res.send(req.body)
})
app.get('/search/:id',function(req,res){
    let id=parseInt(req.params.id)
    if(students[id-1]){
        res.send('data found')
    }
    else{
        res.send('data not found')
    }
})
app.put('/search/:id',function(req,res){
    let id=parseInt(req.params.id)
    if(students[id-1]){
       students[id-1].name=req.body.name
       res.send('data updated')
    }
    else{
        res.send('data not found')
    }
})
app.delete('/search/:id',function(req,res){
    let id=parseInt(req.params.id)
    if(students[id-1]){
       students[id-1].delete
       res.send('data updated')
    }
    else{
        res.send('data not found')
    }
})
app.listen(3000,()=>console.log('The server is running on port 3000'))