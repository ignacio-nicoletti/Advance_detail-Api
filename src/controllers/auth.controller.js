import { formatError } from "../utils/formatError.js"
import { User } from "../models/user.js";
import { generateRefreshToken, generateToken } from "../utils/tokenManager.js";
import { Admin } from "../models/admin.js";
import { sendConfirmationEmail } from "../helpers/sendConfirmationEmail.js";

export const register = async (req, res) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email });
        if (user) { throw new Error('Email ya registrado') }

        user = new User({
            email,
            password,
            admission: Date.now()
        });

        await user.save();
        return res.status(200).json({ msg: "usuario creado" });
    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}

export const login = async (req, res) => {
    let user;
    const { email, password } = req.body
    try {
        user = await User.findOne({ email });
        if (!user) {
            user = await Admin.findOne({ email });
        }
        if (!user) {
            return res.status(403).json({ error: "No existe este usuario" });
        }
        // compara que las contraseñas coincidan
        const respuestaPassword = await user.comparePassword(password);
        if (!respuestaPassword)
            return res.status(403).json({ error: "Contraseña incorrecta" });

        // Generar el token JWT
        const { token, expiresIn } = generateToken(user._id);
        generateRefreshToken(user.id, res);



        return res.status(200).json({ token, expiresIn,user});

    } catch (error) {
        res.status(400).json(formatError(error.message))
    }
}