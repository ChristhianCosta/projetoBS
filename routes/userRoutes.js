import {userController} from "../controler/userController.js";
import { Router } from "express";
import bcrypt from 'bcrypt'
import authToken from "../middleware/authJWT.js";



const userRouter = Router();

userRouter.post('/criar', userController.createUser)
userRouter.post('/achar', userController.findUser)
userRouter.post('/login', userController.loginUser)

userRouter.get('/auth', authToken, (req, res)=>{
    console.log(req.user)
    res.json({data:req.user})
})


export default userRouter