import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Images: {
        type: Array
    }
});


export const Job = mongoose.model('Job', jobSchema)