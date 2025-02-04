import mongoose from 'mongoose';

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

 export default mongoose.model('users',UserSchema);
// module.exports=UserModel;