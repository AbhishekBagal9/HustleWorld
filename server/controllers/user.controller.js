import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";

import { genrateToken } from "../utils/genrateToken.js";
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" }); //json is readable format so send data readable format;
    }
    const existingUser = await User.findOne({ email }); // insteed of  writing email:email we do email only
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "user already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword, // when we have kay value pair same we use this only name only email
    });
    return res
      .status(201)
      .json({ success: true, message: "user created successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "failed to register" });
  }
};

export const login = async (req,res)=>{
  try{
    const {email,password} = req.body;
    if(!email || !password){
      return res.status(400).json({success:false,message:"All fields are required"})
    }
    const user = await User.findOne({email}); //so here actul we are usig email:email
    if(!user){
      return res.status(400).json({success:false,message:"user does not exist"})
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(! isMatch){
      return res.status(400).json({success:false,message:"Incorrect Email or Password"})
    }
 
    genrateToken(res,user,"Login Successfully");

  }
  catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "failed to Login" });
  }
}
