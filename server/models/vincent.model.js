import mongoose from "mongoose"

const VincentSchema = new mongoose.Schema({
    name: {
        type: String,
        
        
        },

    Course: {
        type: String,
        trim: true,
       
    },

    id: {
        type: Number,
        
    },

    message: {
        type: String,
        
    }


});

export default mongoose.model('Vincent', VincentSchema);