import mongoose from "mongoose";


const jobTypeSchema = new mongoose.Schema({

    jobTypeName: {
        type: String,
        trim: true,
        required: [true, 'Job Categories is required '],
        maxlength: 70,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    }
}, { timestamps: true })

export default mongoose.model("jobType", jobTypeSchema)
