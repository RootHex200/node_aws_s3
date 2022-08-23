const { aws_s3 } = require("../controller/aws_s3.controller");




const aws_s3_router=require("express").Router();



aws_s3_router.post("/upload",aws_s3)


module.exports=aws_s3_router;