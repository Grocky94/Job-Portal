import JobType from "../models/jobTypeModel.js";
import { ErrorResponse } from "../Utils/ErrorResponse.js";


// create job category 
export const createJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.create({
            jobTypeName: req.body.jobTypeName,
            user: req.user.id
        })
        res.status(201).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error)
    }
}

// all job category 
export const allJobsType = async (req, res, next) => {
    try {
        const jobT = await JobType.find()
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error)
    }
}
// update job type category 
export const updateJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.findByIdAndUpdate(req.params.type_id, req.body, { new: true })
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error)
    }
}

// delete job type category 
export const deleteJobType = async (req, res, next) => {
    try {
        const jobT = await JobType.findByIdAndRemove(req.params.type_id)
        res.status(200).json({
            success: true,
            message: "Job type deleted"
        })
    } catch (error) {
        next(new ErrorResponse("Server Error", 500))
    }
}

