import Homeplan from '../Models/Homeplan.js'; // Correct path for the model

// Create a new home plan
export const createHomePlan = async (req, res) => {
  try {
    const data =new Homeplan(req.body);
    if(!data){
      return res.status(404).json({msg:"User data not found"})
    }
console.log(" checking data before db",data);
await data.save();
console.log(" checking data after saving to db",data);
    return res.status(201).json({
      message: "Home plan created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Home plan error"
    });
  }
};

// Get all home plans
export const getallHomePlan = async (req, res) => {
  try {
    let data = await Homeplan.find();
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

// Get a specific home plan by ID
export const getOneHomePlan = async (req, res) => {
  try {
    const id = await req.params.id; // Using params to get the ID
    const data=await Homeplan.findById(id)
    if (!data) {
      return res.status(404).json({
        message: "Home plan not found",
      });
    }
     res.status(200).json({
      message: "Home plan fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error, unable to fetch home plan",
      error: error
    });
  }
};

// Update a specific home plan by ID
export const updateHomePlan = async (req, res) => {
  try {
    const id=req.params.id;
    const data = await Homeplan.findById(id);
    if(!data){
      return res.status(401).json({msg:"Plan not found"})
    }
    
    const updatedData=await Homeplan.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json({msg:"User updated successfully"});
  console.log(updatedData)

  }
    catch(error){
     res.status(500).json({error:error})
    }

};

// Delete a specific home plan by ID
export const deleteHomePlan = async (req, res) => {
  try {
    const id=req.params.id;
    const data = await Homeplan.findByIdAndDelete(id); 
    if (!data) {
      return res.status(404).json({
        message: "Home plan not found",
      });
    }
   await Homeplan.findByIdAndDelete(id);
   res.status(200).json({msg:"User deleted Successfully"})
  } catch (error) {
    return res.status(500).json({
      error: error
    });
  }
};
