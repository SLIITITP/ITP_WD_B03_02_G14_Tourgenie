<<<<<<< HEAD
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean, default: false
    }

},{
    timestamps: true,
})

const userModel= mongoose.model('users', userSchema)
module.exports = userModel
=======
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
>>>>>>> f46d21320db39d5c1b711e338a150f88d40fe2e6
