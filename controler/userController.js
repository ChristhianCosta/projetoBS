import User from "../models/user.js";
import bcrypt from 'bcrypt'

export const userController = {
    createUser: async (req, res)=>{
        console.log(req.body)
        try {       

            const user = {
                username: req.body.username,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password,6)
            } 
            
        } catch (error) {
            console.log(error)
        }   
        //const response = await User.create(user);

        res.status(201).json({response, user})
        
       

        
    }
}

