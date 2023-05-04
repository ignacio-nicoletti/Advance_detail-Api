import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    default: null,
  },
  dimensions: {
    type: String,
    default: null,
  },
  material: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: String,
    default: null,
  },
  image: {
    type: Array,
  },
});

export const Product = mongoose.model("Product", productSchema);
