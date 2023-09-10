//import { userControl } from "../controler/userController";
import { Router } from "express";
import bcrypt from 'bcrypt'

const userController = {
    createUser: async (req, res)=>{
        try {
            const user = {
                username: req.body.username,
                email: req.body.email,
                password: '123' //await bcrypt.hash(req.body.password,10)
            } 
            console.log(user)
        } catch (error) {
            console.log(error)
        }    
        
        //const response = await User.create(user);

        //res.status(201).json({response, user})
        //res.status(201).json({response, msg:"usuário criado com sucesso"})
       

        
    }
}

const userRouter = Router();

userRouter.post('/criar', userController.createUser)


export default userRouter