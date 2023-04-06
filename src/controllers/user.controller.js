import { formatError } from "../utils/formatError.js"
import { User } from "../models/user.js";




export const getAllUser = async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }

}

export const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        let user = await User.findById(id)
        res.status(200).json({ user })
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;

    const { name, lastName, country, state } = req.body
    try {
        let user = await User.findByIdAndUpdate(id, {
            name: name,
            lastName: lastName,
            country: country,
            state: state
        }, { new: true })
        res.status(200).json({ user })
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(
            id,
            { state: false },
            { new: true }
        );

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(formatError(error.message));
    }
};