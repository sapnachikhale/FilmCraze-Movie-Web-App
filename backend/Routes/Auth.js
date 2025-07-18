const express=require('express');
const router=express.Router();
const User=require('../middleware/user');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwt_secret='Sapnaisgoodgirl';
var fetchuser=require('../middleware/fetchuser');



//ROUTE 1:create a user using:POST api/auth/createuser :no login required

router.post('/createuser',[
  body('name','Enter a valid name').isLength({min:3}),
  body('email','Enter a valid email ').isEmail(),
  body('password','Password must be atleast 5 character').isLength({min:5}),
],async (req,res)=>{
  //if there are error return bad request and error
let success=false
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success,errors:errors.array()});
  }

  //check whether user email is already exists
  try{

  let user=await User.findOne({email:req.body.email});
  if(user){
    return res.status(400).json({success,error:"Sorry a user with this email is already exits"})
  }

  const salt=await bcrypt.genSalt(10);
  const secPass=await bcrypt.hash(req.body.password,salt)
   user=await User.create({
          name:req.body.name,
          email:req.body.email,
          password:secPass
  })
  const data={
    user:{
      id:user.id
    }
  }
  const authtoken=jwt.sign(data,jwt_secret);
  success=true;
  res.json({success,authtoken})

}catch(error){
  console.log(error.message)
  res.status(500).json("Internal server error");
}
});

//ROUTE 2:authenticate a user:POST api/auth/login :no login required

router.post('/login',[
  body('email','Enter a valid email ').isEmail(),
  body('password','password cannot be blank').exists()
],async (req,res)=>{
 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()});
  }
  const{email,password}=req.body;
  try {
    let user=await User.findOne({email});
    if(!user){
      return res.status(400).json({error:"please try to login with correct credentials"})
    }
    const comparepassword=await bcrypt.compare(password,user.password);
    if(!comparepassword){
      success=false
      return res.status(400).json({success,error:"please try to login with correct credentials"})
    }
    const data={
      user:{
        id:user.id
      }
    }
    const authtoken=jwt.sign(data,jwt_secret);
    success=true;
    res.json({success,authtoken})

  } catch (error) {
    console.log(error.message)
    res.status(500).json("Internal server error");
  }
})

//ROUTE 3:Get loggedin a user details:POST api/auth/getuser: login required

router.post('/getuser',fetchuser,async (req,res)=>{
try {
  userId=req.user.id;
  const user=await User.findById(userId).select("-password");
  res.send(user);
} catch (error) {
  console.log(error.message)
    res.status(500).json("Internal server error");
}})


module.exports=router