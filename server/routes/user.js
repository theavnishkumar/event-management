import express from "express";
import { handleRegister, handleLogin } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post('/signup', handleRegister);
userRouter.post('/login', handleLogin);

export default userRouter;