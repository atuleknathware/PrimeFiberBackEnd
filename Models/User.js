const mongoose=require('mongoose');
const { type } = require('os');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
   Full_Name:{
        type:String,
        required:true
    },
    Mobile_No:{
        type:Number,
        required:true
    },
  
    Email:{
        type:String,
        required:true
    },

    Address:{
        type:String,
        required:true
    },
})

const UserModel=mongoose.model('users',UserSchema);
module.exports=UserModel;