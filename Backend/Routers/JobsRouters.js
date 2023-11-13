import express from "express";
import { isAdmin, isAuthenticated } from "../middleWare/auth.js";
import { createJob, showJobs, singleJob, updateJob } from "../controller/jobsController.js";

export const jobsRouter = express.Router()

// jobs route

// api/job/create
jobsRouter.post('/job/create', isAuthenticated, isAdmin, createJob);
// api/job/id
jobsRouter.get('/job/:id', singleJob);
// api/job/update/job_id
jobsRouter.put('/job/update/:job_id', isAuthenticated, isAdmin, updateJob);
// api/jobs/show
jobsRouter.get('/jobs/show',showJobs);


