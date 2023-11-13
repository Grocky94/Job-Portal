
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


const jobHistorySchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        maxlength: 70
    },
    description: {
        type: String,
        trim: true
    },
    salary: {
        type: String,
        trim: true
    },
    location: {
        type: String
    },
    interviewData: {
        type: Date
    },
    applicationStatus: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    }
}, {
    timestamps: true
})

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        require: [true, 'first name is required '],
        maxlength: 32,
    },
    lastName: {
        type: String,
        trim: true,
        require: [true, 'last name is required '],
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        require: [true, 'email is required '],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
    },
    password: {
        type: String,
        trim: true,
        require: [true, 'password is required '],
        minlength: [6, 'Password must have 6 Characters']
    },

    jobsHistory: [jobHistorySchema],
    
    role: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

// encrept the password before saving them
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

// compare user password 
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// return a Jwt token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: 3600
    })
}

export default mongoose.model("user", userSchema)