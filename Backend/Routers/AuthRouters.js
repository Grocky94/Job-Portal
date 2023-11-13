import express from "express";
import { logout, signin, signup, userProfile } from "../controller/authController.js";
import { isAuthenticated } from "../middleWare/auth.js";
export const authRouter = express.Router()

// api/signup
authRouter.post('/signup', signup)
// api/signin
authRouter.post('/signin', signin)
// api/logout
authRouter.get('/logout', logout)
// api/me
authRouter.get('/me', isAuthenticated, userProfile)