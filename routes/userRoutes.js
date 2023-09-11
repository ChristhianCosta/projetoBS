import {userController} from "../controler/userController.js";
import { Router } from "express";
import bcrypt from 'bcrypt'



const userRouter = Router();

userRouter.post('/criar', await userController.createUser)


export default userRouter