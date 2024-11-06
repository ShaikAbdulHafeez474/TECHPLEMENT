
const express= require("express")
const router= express.Router();

const IsUser= require("../middlewares/isUser");

const {signup,updateUser,deleteUser}=require("../controllers/userController");


router.get('/login',IsUser)


router.post('/signup',signup);

router.put('/update/:id',updateUser);

router.delete('/delete/:id',deleteUser);

module.exports=router;