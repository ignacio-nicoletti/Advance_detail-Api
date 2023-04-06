import { Product } from "../models/product.js";
import { formatError } from "../utils/formatError.js";

export const createProduct = async (req, res) => {
    const { name, dimensions, material, description, price } = req.body
    try {
        let product = new Product({
            name,
            description,
            price,
            dimensions,
            material
        });
        await product.save();
        return res.status(200).json({ msg: "producto creado" });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}


export const GetAllProduct = async (req, res) => {
    try {
        let products = await Product.find()
        return res.status(200).json({ products });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}

export const GetProductById = async (req, res) => {
    const { id } = req.params
    try {
        let product = await Product.findById(id)
        return res.status(200).json({ product });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}

export const UpdateProductById = async (req, res) => {
    const { id } = req.params
    const { name, dimensions, material, description, price } = req.body
    try {
        let product = await Product.findByIdAndUpdate(id, {
            name,
            dimensions,
            material,
            description,
            price
        }, { new: true })
        return res.status(200).json({ product });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}
export const DeleteProductById = async (req, res) => {
    const { id } = req.params
    try {
        let product = await Product.findByIdAndRemove(id)

        return res.status(200).json({ product });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}


