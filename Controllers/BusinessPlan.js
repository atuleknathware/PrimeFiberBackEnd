import bussinessPlan from '../Models/Businessplan.js'; // Correct path for the model

// Create a new home plan
export const createBusiness = async (req, res) => {
  try {
    const data =new bussinessPlan(req.body);
    if(!data){
      return res.status(404).json({msg:"User data not found"})
    }
console.log(" checking data before db",data);
await data.save();
console.log(" checking data after saving to db",data);
    return res.status(201).json({
      message: "Business plan created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Business plan error"
    });
  }
};

// Get all home plans
export const getallBusiness = async (req, res) => {
  try {
    const data = await bussinessPlan.find();
    if(!data){
      return res.status(404).json({msg:"User data not found"})
    }
    res.status(200).json({
      message: "Business plans fetched successfully",
      data,
    });
  } catch (error) {
     res.status(500).json({
      message: "Server error, unable to fetch home plans",
      error: error
    });
  }
};

// Get a specific home plan by ID
export const getOneBusiness = async (req, res) => {
  try {
    const id = await req.params.id; // Using params to get the ID
    const data=await bussinessPlan.findById(id)
    if (!data) {
      return res.status(404).json({
        message: "Business plan not found",
      });
    }
     res.status(200).json({
      message: "Business plan fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error, unable to fetch Business plan",
      error: error
    });
  }
};

// Update a specific home plan by ID
export const updateBusiness = async (req, res) => {
  try {
    const id=req.params.id;
    const data = await bussinessPlan.findById(id);
    if(!data){
      return res.status(401).json({msg:"Business Plan not found"})
    }
    
    const updatedData=await bussinessPlan.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json({msg:"Business Plan updated successfully"});
  }
    catch(error){
     res.status(500).json({error:error})
    }
};

// Delete a specific home plan by ID
export const deleteBusinessPlan = async (req, res) => {
  try {
    const id=req.params.id;
    const data = await bussinessPlan.findByIdAndDelete(id); 
    if (!data) {
      return res.status(404).json({
        message: "Business plan not found",
      });
    }
   await bussinessPlan.findByIdAndDelete(id);
   res.status(200).json({msg:"BusinessPlan deleted Successfully"})
  } catch (error) {
    return res.status(500).json({
      error: error
    });
  }
};
