


const express=require("express");
const aws_s3_router = require("./route/aws_s3.router");

const app=express();
const cors=require("cors")
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use("/api/aws",aws_s3_router)


app.use((req,res,next)=>{
    res.status(404).json({message:"no route found"})
})

app.use((error,req,res,next)=>{
    res.status(500).json({message:"500 intenal server error"})
})

module.exports=app;