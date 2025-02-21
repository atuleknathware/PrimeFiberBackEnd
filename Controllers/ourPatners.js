import LogoModel from "../Models/Logo.js";

export const createlogo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const imgPath = `http://localhost:8080/uploads/${req.file.filename}`;

    const data = new LogoModel({
      img: imgPath,
    });

    console.log("Checking data before saving to DB:", data);
    await data.save();
    console.log("Checking data after saving to DB:", data);

    return res.status(201).json({
      message: "Logo created successfully",
      logo: data
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Logo error" });
  }
};


export const getSunglelogo = async (req, res) => {
  try {
    let data = await LogoModel.findOne();
    if(!data){
      return res.status(404).json({msg:"Logo data not found"})
    }
    res.status(200).json({
      message: "Logo fetched successfully",
      // data,
       data: {img:`http://localhost:8080${data.img}`,_id:data._id}
    });
  } catch (error) {
     res.status(500).json({
      message: "Server error, unable to fetch Logo",
      error: error
    });
  }
};


// Get one logo by ID
export const getOneLogo = async (req, res) => {
  try {
    const logo = await LogoModel.findById(req.params.id);
    if (!logo) {
      return res.status(404).json({ message: "Logo not found" });
    }
    res.json({ success: true, data: logo });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

// Update logo image
export const updateLogo = async (req, res) => {
  console.log("Type of upload:", typeof upload);
  try {
    console.log("Received File:", req.file); // Debug file upload

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const logoId = req.params.id;
    const imagePath = `/uploads/${req.file.filename}`; // Path to store in DB

    // Update logo in the database
    await LogoModel.findByIdAndUpdate(logoId, { img: imagePath });

    res.json({ message: "Logo updated successfully", img: imagePath });
  } catch (error) {
    console.error("Error updating logo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
