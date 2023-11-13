import express from "express";
import { isAdmin, isAuthenticated } from "../middleWare/auth.js";
import { allJobsType, createJobType, deleteJobType, updateJobType } from "../controller/jobTypeController.js";
export const jobTypeRouter = express.Router()

// jobTypeRouters route

// api/type/create
jobTypeRouter.post('/type/create', isAuthenticated, isAdmin, createJobType);
// api/type/jobs
jobTypeRouter.get('/type/jobs', allJobsType);
// api/type/update/type_id
jobTypeRouter.put('/type/update/:type_id', isAuthenticated, isAdmin, updateJobType);
// api/type/delete/type_id
jobTypeRouter.delete('/type/delete/:type_id', isAuthenticated, isAdmin, deleteJobType);