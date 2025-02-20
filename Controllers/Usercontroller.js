import user from "../Models/User.js";


export const User = async (req, res) => {
  try {
    let data = await user.find();
    if(!data){
      return res.status(404).json({msg:"User data not found"})
    }
    res.status(200).json({
      message: "Home plans fetched successfully",
      data,
    });
  } catch (error) {
     res.status(500).json({
      message: "Server error, unable to fetch home plans",
      error: error
    });
  }
};