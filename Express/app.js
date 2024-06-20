const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("Hello from sanju fd")
})

app.get('/contact/:id',(req,res)=>{
    res.send(req.params.id)
})
const port=process.env.PORT || 3000

app.listen(port,()=>{console.log("Port running on "+port)})

