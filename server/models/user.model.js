import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true},
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type: String,
    required: true,
    enum:["instructor","student"], //only fiexed values 
    default:"student"
  },
  enrolledCourses:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Course"
  }],
  photoUrl:{
    type: String,
    default:""
  },{timestamps: true})

export const User = mongoose.model("User", userSchema);