import Admin from "../Models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

export const adminLogin = async (req,res)=>{
    try {
        const { email, password } = req.body;
// Admin.create({email,password:"$2a$10$.fqJbZE6h80EUv7y2hfhDuyY5hwH96wRdxHgK07K/732AuQPo19bO"})
        // Check if user exists
        const user = await Admin.findOne({ email });
        if (!user) return res.status(400).json({status:false, message: "Invalid email or password" } );

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({status:false, message: "Invalid email or password" });

        
        const userNew = user.toObject();
        delete userNew.password;
        const token = jwt.sign(userNew,process.env.jwtsalt);
        return res.status(200).json({status:true, message: "Login successful", user:userNew, token });
    } catch (error) {
        console.log('here is error :- ', error);
        return res.status(500).json({ message: "Server Error", error });
    }


}