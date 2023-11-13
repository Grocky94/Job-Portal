import express from "express";
import { allUsers, createUserJobsHistory, deleteUser, editUser, singleUser } from "../controller/userController.js";
import { isAdmin, isAuthenticated } from "../middleWare/auth.js";
export const userRouter = express.Router()

// user route

// api/allusers
userRouter.get('/allusers', isAuthenticated, isAdmin, allUsers)
// api/user/id
userRouter.get('/user/:id', isAuthenticated, singleUser)
// api/user/edit/id
userRouter.put('/user/edit/:id', isAuthenticated, editUser)
// api/admin/user/delete/id
userRouter.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser)
// api/user/jobshistory
userRouter.post('/user/jobshistory', isAuthenticated, createUserJobsHistory)