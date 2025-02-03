const express=require('express');

const app=express();




app.use("/hello",(req,res)=>{
    res.send("!!!!hello Hello Hello ");
});

app.use("/test",(req,res)=>{
    res.send("server testing chalu hai ");
});

app.use("/",(req,res)=>{
res.send("hello from the server side ");
});

app.listen(7777,()=>{
    console.log('Server is listening on port  7777 successfully...');
    
});
