const userModel=require("../models/user.model")
const jwt=require('jsonwebtoken')
const bcrypt=require("bcryptjs")


async function registerUser(req,res){
    const{username,email,password,role="user"}=req.body

    const isUserAlreadyExists= await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
      
    })
      if(isUserAlreadyExists){
         return res.status(400).json({
            message:"User Already Exists"
         })}
         const hash= await bcrypt.hash(password,10)
         const user = await userModel.create({

            username,
            email,
            password:hash,
            role
         })  
const token = jwt.sign({
    id:user._id,
    role:user.role
},process.env.JWT_SECRET)

res.cookie("token",token,{
      httpOnly: true,
  sameSite: "lax",
  secure: false,
  domain:"localhost"
})
res.status(200).json({
    message:"User Created Successfully",
    token:token,
    user:{
        id:user._id,
        username:user.username,
        email:user.email,
        role:user.role,
    }
})
        
}

async function loginUser(req,res){
    const{username ,email , password}=req.body;
    const user= await userModel.findOne({
        $or : [
            {username:username},
            {email:email}
 
        ]
    })
    if(!user){
        return res.status(401).json({
            message:"Invalid credentials"
        })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)

if(!isPasswordValid){
    return res.status(401).json({
        message:"Invalid credentials"
    }) 
    
    
}const token=jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)

    res.cookie("token",token,{
          httpOnly: true,
  sameSite: "lax",
  secure: false,
  domain:"localhost"
    })
    
    res.status(200).json({
        message:"User Logged Successfully",
        token:token,
        user:{
            id: user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }
    })}

    async function logOutUser(req,res){
        res.clearCookie("token")
        res.status(200).json({message:"You are logged out !!!!"})
    }
module.exports={registerUser,loginUser,logOutUser}