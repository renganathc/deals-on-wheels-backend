import mongoose from "mongoose";

const visitSchema = new mongoose.Schema({
    device: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
}, {timestamps:false});

const Visit = mongoose.model("Visits", visitSchema);

export default Visit;