import MobileNo from "../Models/MobileNo.js";

// Create a new home plan
export const createMobileNo = async (req, res) => {
  try {
    const data = new MobileNo(req.body);
    if (!data) {
      return res.status(404).json({ msg: "User data not found" });
    }
    console.log(" checking data before db", data);
    await data.save();
    console.log(" checking data after saving to db", data);
    return res.status(201).json({
      message: "Business plan created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Business plan error",
    });
  }
};

// Get all home plans
export const getallMobileNo = async (req, res) => {
  try {
    const data = await MobileNo.find();
    if (!data) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json({
      message: "Business plans fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error, unable to fetch home plans",
      error: error,
    });
  }
};

// Get a specific home plan by ID
export const getOneMobileNo = async (req, res) => {
  try {
    const id = await req.params.id; // Using params to get the ID
    const data = await MobileNo.findById(id);
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
      error: error,
    });
  }
};

// Update a specific home plan by ID
export const updateMobileNo = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await MobileNo.findById(id);
    if (!data) {
      return res.status(401).json({ msg: "Business Plan not found" });
    }

    const updatedData = await MobileNo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "Business Plan updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Delete a specific home plan by ID
export const deleteMobileNo = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await MobileNo.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).json({
        message: "Business plan not found",
      });
    }
    await MobileNo.findByIdAndDelete(id);
    res.status(200).json({ msg: "BusinessPlan deleted Successfully" });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};
