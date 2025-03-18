import multer from "multer";
import path from "path";
import fs from "fs";

// Create the uploads folder if it doesn't exist
const uploadDir = path.resolve("uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Correctly resolve to 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  }
});

const upload = multer({ storage }).single("img"); // Use .single('img')

export default upload;
