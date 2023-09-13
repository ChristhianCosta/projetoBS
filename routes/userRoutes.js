import {userController} from "../controler/userController.js";
import { Router } from "express";
import bcrypt from 'bcrypt'



const userRouter = Router();

userRouter.post('/criar', userController.createUser)
userRouter.post('/achar', userController.findUser)
userRouter.post('/login', userController.loginUser)


export default userRouter