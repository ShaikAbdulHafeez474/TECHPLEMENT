
const User=require("../models/users");


const signup= async(req,res)=>{
      
   try{
    const {name, email, password}=req.body;

    const existing= await User.findOne({email:email});

    if(existing){

        res.json({
            message:"you have already registered"
        })
    }
    else{
        const newuser= new User({name,email,password})

    await newuser.save();

     res.status(200).json({
        success:true,
        user:newuser,
        message:"successfully signed up"
     })
    }
   }
   catch(err){
       res.status(500).json({
         success:false,
         message:err.message
       })
   }

}

const updateUser=async(req,res)=>{

     try{
        
         const userId=req.params.id; // this is to store id as a string not as a object
        const {newname,email,newpassword}=req.body;

        const updated= await User.findByIdAndUpdate(userId,{...req.body},{new:true})

        if(!updated){
             res.json({
                message:"user does not exist"
             })
        }

       else{
        res.status(200).json({
            success:true,
            message:'updated successfully'
        })
       }

     }
     catch(err){

         res.status(500).json({
             success:false,
             message:err.message
         })
     }
}

const deleteUser=async(req,res)=>{

    try{

        const userId=req.params.id

   // const {delemail}=req.body;

    const deleted= await User.findByIdAndDelete(userId);

    if(!deleted){

        res.json({
            message:"user does not exist"
        })
    }

     res.status(200).json({
         success:true,
         message:'user successfully deleted'
     })
        
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}



module.exports= {signup,updateUser,deleteUser}