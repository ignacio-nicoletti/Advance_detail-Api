import { Service } from "../models/service.js";
import { formatError } from "../utils/formatError.js";

export const createService = async (req, res) => {
    const { name, description, price } = req.body
    try {
        let service = new Service({
            name,
            description,
            price,

        });
        await service.save();
        return res.status(200).json({ msg: "producto creado" });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}


export const GetAllService = async (req, res) => {
    try {
        let service = await Service.find()
        return res.status(200).json({ service });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}

export const GetServiceById = async (req, res) => {
    const { id } = req.params
    try {
        let service = await Service.findById(id)
        return res.status(200).json({ service });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}

export const UpdateServiceById = async (req, res) => {
    const { id } = req.params
    const { name, description, price } = req.body
    try {
        let service = await Service.findByIdAndUpdate(id, {
            name,
            description,
            price
        }, { new: true })
        return res.status(200).json({ service });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}
export const DeleteServiceById = async (req, res) => {
    const { id } = req.params
    try {
        let service = await Service.findByIdAndRemove(id)

        return res.status(200).json({ service });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}


