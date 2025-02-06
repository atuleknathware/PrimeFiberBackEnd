import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Full_Name: {
        type: String,
        required: true
    },
    Mobile_No: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Service_Type: {
        type: String,
        required: true,
        enum: ["Home Broadband", "Bandwidth for Business"], // Restricts values
    }
});

export default mongoose.model('users', UserSchema);
