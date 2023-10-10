import {userController} from "../controler/userController.js";
import { Router } from "express";
import bcrypt from 'bcrypt'
import authToken from "../middleware/authJWT.js";
import logout from "../middleware/logout.js";



const userRouter = Router();

userRouter.post('/criar', userController.createUser)
userRouter.post('/achar', userController.findUser)
userRouter.post('/login', userController.loginUser)
userRouter.post('/logout', (req, res)=>{
    res.clearCookie("accessToken").json({message:"erro de autenticação"})
})

userRouter.get('/auth', authToken, (req, res)=>{
    res.json({data:req.user})
})


export default userRouter