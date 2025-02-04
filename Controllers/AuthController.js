const UserModel=require('../Models/User')

const Query=async(req,res)=>{
    try{
        const{Full_Name,Mobile_No,Email,Address}=req.body;
        const newUser=new UserModel({Full_Name,Mobile_No,Email,Address});
        await newUser.save();
        await res.status(201).json({
            message:"Query Send Sucessfully",
            success:true
        })
    }catch(err){
        res.status(500)
        .json({
            message:"Internal server error",
            success:false
        })
    }
}

module.exports={Query}