


const app=require("./app")
const dev = require("./config/config")

const PORT=dev.app.PORT;


app.listen(PORT,(req,res)=>{
    console.log(`seerver isi running http://localhost:${PORT}`)
})