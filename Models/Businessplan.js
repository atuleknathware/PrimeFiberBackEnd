import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const adminSchema2 = new Schema({
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
    }
});

export default mongoose.model('bussinessPlan', adminSchema2);
