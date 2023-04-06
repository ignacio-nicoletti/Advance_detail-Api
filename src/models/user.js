import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: Array
    },
    name: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    gmail: {
        type: Boolean,
        default: false,
    },
    Rol: {
        type: String,
        default: 'ROL_User'
    },
    country: {
        type: String,
        default: null
    },
    admission: {
        type: Date,
    },
    state: {
        type: Boolean,
        default: true
    },
    verify: {
        type: Boolean,
        default: false
    }
});


userSchema.pre('save', async function (next) {
    const user = this
    if (!user.isModified("password")) return next()
    try {
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(user.password, salt)
        next()
    } catch (error) {
        console.log(error);
    }
})

userSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
};

userSchema.methods.comparePassword = async function (canditatePassword) {
    return await bcryptjs.compare(canditatePassword, this.password);
};

export const User = mongoose.model('User', userSchema)
