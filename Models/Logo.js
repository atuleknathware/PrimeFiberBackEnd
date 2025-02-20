import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const logoSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    
});

export default mongoose.model('Logo', logoSchema);






