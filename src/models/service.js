import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: null
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Array
    }


})


export const Service = mongoose.model('Service', serviceSchema)