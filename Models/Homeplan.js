import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const adminSchema = new Schema({
    planName: {
        type: String,                                                                                             
        required: true
    },
    planSpeed: {
        type: String,
        required: true
    },
    planData: {
        type: String,
        required: true
    },
    oneMonth: {
        type: String,
        required: true
    },
    threeMonth: {
        type: String,
        required: true
    },
    sixMonth: {
        type: String,
        required: true
    },
    twelveMonth: {
        type: String,
        required: true
    },
    ott: {
        type: String,
         enum: ["active", "inactive"],
        required: true
    }
});

export default mongoose.model('homeplan', adminSchema);
