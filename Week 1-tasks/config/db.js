
const mongoose=require("mongoose");

const dotenv=require("dotenv");

dotenv.config();


const  connectDB= async()=>{

    try{

     const connection= mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
     });

     console.log("mongodb connection successfull");

    }
    catch(err){

        console.log("connection failed");
        process.exit(1);
    }
}

module.exports=connectDB;