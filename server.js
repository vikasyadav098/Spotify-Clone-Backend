require("dotenv").config()
const app =require("./src/app")
const connectDb=require("./src/db/db")


connectDb();


app.listen(5000,()=>{
    console.log("PORT IS SUCCESSFULLY RUNNING");
    
})