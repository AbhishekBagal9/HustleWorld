import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ sucess: false, message: "All fields are required" }); //json is readable format so send data readable format;
    }
    await User.findOne({ email });
    if (User) {
      return res
        .status(400)
        .json({ sucess: false, massage: "User already exists" });
    }
    const hashedPassword = await bycrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword, // when we have kay value pair same we use this only name only email
    });
    return res
      .status(201)
      .json({ sucess: true, massage: "User created successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ sucess: false, massage: "failed to register" });
  }
};

export const login = async (req,res)=>{
  try{
    const {email,password} = req.body;
    if(!email || !password){
      return res.status(400).json({sucess:false,massage:"All fields are required"})
    }
    const user = await User.findOne({email}); //so here actul we are usig email:email
    if(!user){
      return res.status(400).json({sucess:false,massage:"User does not exist"})
    }
    const isMatch = await bycrypt.compare(password,User.password);
    if(! isMatch){
      return res.status(400).json({sucess:false,massage:"Incorrect Email or Password"})
    }
  }
  catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ sucess: false, massage: "failed to Login" });
  }
}
