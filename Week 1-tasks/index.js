
const express= require("express");

const app= express();

const dotenv= require("dotenv");

dotenv.config();

const connectDB= require('./config/db');

//const PORT=3000;

const userroute=require("./routes/userRoutes");

connectDB();

app.use(express.json());

app.use("/api",userroute);

app.get('/',(req,res)=>{
    console.log("Iam inside home page handler")

    res.send("hello welcome to techplement")
})


app.listen(process.env.PORT,()=>{
    console.log("server is up");
})

