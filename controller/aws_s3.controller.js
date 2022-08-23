

const multer=require("multer")
const multers3=require("multer-s3-transform")

const aws=require("aws-sdk")

const dev=require("../config/config");



const S3=new aws.S3({
    accessKeyId:dev.db.AWS_ACCESS_KEY_ID,
    secretAccessKey:dev.db.AWS_SECRET_ACCESS_KEY
})
const upload=multer({
    storage:multers3({
        s3:S3,
        bucket:"nodeawss3",
        key:(req,file,cb)=>{
            if(file.fieldname=="singlefile"){
                cb(null,"single/"+file.originalname);
            }else if(file.fieldname=="multifile"){
                cb(null,"multi/" + file.originalname);
            }
        }
    })
})


const aws_upload=upload.fields([
    {
        name:"singlefile",maxCount:1
    },
    {
        name:"multifile",maxCount:5
    }
])

const aws_s3=(req,res)=>{
    aws_upload(req,res,(err)=>{
        if(err){
            return res.status(400).send({
                result:0,
                message:err
            });
        }
        return res.status(200).send({
            message:"upload successfully"
        })
    });
}


module.exports={aws_s3}