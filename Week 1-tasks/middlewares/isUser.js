
const User=require("../models/users");

const isuser= async(req,res)=>{

      try{
        const {email,password}=req.body;

      const userpresent= await User.findOne({email:email});

      const pw=userpresent.password;

      if(userpresent){

         if(pw!=password){

            res.json({
                
                message:"please reenter password"
            })
         }
         else{

            res.json({
                message:"successfully logged in"
            })
         }

        
      }
      else{
         res.json({
            message:"Please register yourself to login"
         })
      }
      }
      catch(err){

         res.status(500).json({
            success:false,
            message:"internal server error"
         })
      }
}

module.exports=isuser;