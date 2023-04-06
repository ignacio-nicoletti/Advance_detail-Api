import { Job } from "../models/Job.js";
import { formatError } from "../utils/formatError.js";

export const createJob = async (req, res) => {
    const { name, description } = req.body
    try {
        let job = new Job({
            name,
            description,

        });
        await job.save();
        return res.status(200).json({ msg: "Trabajo creado" });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}


export const GetAllJob = async (req, res) => {
    try {
        let job = await Job.find()
        return res.status(200).json({ job });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}

export const GetJobById = async (req, res) => {
    const { id } = req.params
    try {
        let job = await Job.findById(id)
        return res.status(200).json({ job });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}

export const UpdateJobById = async (req, res) => {
    const { id } = req.params
    const { name, description } = req.body
    try {
        let job = await Job.findByIdAndUpdate(id, {
            name,
            description,
        }, { new: true })
        return res.status(200).json({ job });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}
export const DeleteJobById = async (req, res) => {
    const { id } = req.params
    try {
        let job = await Job.findByIdAndRemove(id)

        return res.status(200).json({ job });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}


