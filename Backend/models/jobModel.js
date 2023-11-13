import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required '],
        maxlength: 70,
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required ']
    },
    salary: {
        type: String,
        trim: true,
        required: [true, 'Salary is required ']
    },
    location: {
        type: String
    },
    available: {
        type: Boolean,
        default: true
    },
    jobType: {
        type: mongoose.Schema.ObjectId,
        ref: "jobType",
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("job", jobSchema)
