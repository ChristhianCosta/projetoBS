import User from "../models/user";
import bcrypt from 'bcrypt'

export const userControl = {
    createUser: async (req, res)=>{
        let passholder = req.body.password

        bcrypt.hash(passholder,10).then(async (hash)=>{
            const user = {
                username: req.body.username,
                email: req.body.email,
                password: hash
            } 
            console.log(user)
            //const response = await User.create(user);

            //res.status(201).json({response, msg:"usuário criado com sucesso"})
        })

        
    }
}

