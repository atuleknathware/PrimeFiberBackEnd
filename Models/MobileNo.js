import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mobileSchema = new Schema({
  mobileNo: {
    type: String,
    required: true,
  },
});

export default mongoose.model("MobileNo", mobileSchema);
