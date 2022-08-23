

require("dotenv").config();

const dev={
    app:{
        PORT:process.env.PORT
    },
    db:{
        AWS_ACCESS_KEY_ID:process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY:process.env.AWS_SECRET_ACCESS_KEY,
        AWS_BUCKET_NAME:process.env.AWS_BUCKET_NAME
    }
}


module.exports=dev;