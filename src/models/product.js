import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dimensions: {
        type: String,
        default: null
    },
    material: {
        type: String,
        default: null
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        default: null
    },
    image: {
        type: Array
    }
});

export const Product = mongoose.model('Product', productSchema)