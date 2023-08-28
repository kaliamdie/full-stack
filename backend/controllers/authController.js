const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User=require("../models/auth")


///

function generateToken(user) {
    const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    return token;
}
async function signup(req,res){
    try{
        //user exist
        const foundUser=await User.findOne({username:req.body.username})
   if(foundUser){
    return res.status(400).json({error:"user already exists"})
   }
   //if they user doesnt exist
   const encryptPassword=await bcrypt.hash(req.body.password,Number(process.env.SALT_ROUNDS))
    const newUser=await User.create({...req.body,password:encryptPassword})
    //
    const token =generateToken(newUser)
    res.status(200).json({ token })

}
    catch(err){
        console.log(err.message)
        res.status(400).json({ error: err.message })
    }
}
async function login(req,res){
    try{
        const foundUser = await User.findOne({ username: req.body.username })

    if (!foundUser) {
        return res.status(404).json({ error: 'No such user exists' })
    }
  //check the password with the password provided
  const validPassword=await bcrypt.compare(req.body.password,foundUser.password)
  if(!validPassword){
    return res.status(400).json({ error: 'Incorrect Password' })
  }
  const token=generateToken(foundUser)

  res.status(200).json({token })
    }catch(err){
        console.log(err.message)
        res.status(400).json({ error: err.message })
    }
}
module.exports={
    signup,
    login
}