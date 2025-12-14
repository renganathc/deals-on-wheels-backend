import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    variant: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    km: {
        type: Number,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    ownerCount: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
},{ timestamps: true });


const Car = mongoose.model('Car', carSchema);

export default Car;