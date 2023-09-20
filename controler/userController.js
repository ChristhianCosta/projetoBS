import { response } from "express";
import User from "../models/user.js";
import bcrypt from 'bcrypt'
import createToken from "../config/JWT.js";
import cookieParser from "cookie-parser";

export const userController = {
    createUser: async (req, res)=>{        
         
        User.findOne({username:req.body.username}).then(async (userDB)=>{
            if(userDB){
                res.json({message:"usuário já existe", data:userDB.email})
            } else{

                const user = {
                    username: req.body.username,
                    email: req.body.email,
                    password: await bcrypt.hash(req.body.password,6)
                }                
        
                try {                           
                    const response = await User.create(user);
                    res.status(201).json({user:user})
                } catch (error) {      
                    res.status(400).json({message:error})
                }
            }
        })                                   
    },

    loginUser: async (req, res) =>{
        const {email, password} = req.body
                
        try {
            const user = await User.findOne({email:email})
            if(!user){
                res.status(404).json({message:"usuário não encontrado"})
            } else{
                bcrypt.compare(password, user.password).then((match)=>{
                    if(!match){
                        res.status(400).json({error:"Combinação de senha e usuário errada"})
                    } else {                        
                        const accessToken = createToken(user)                   
                       
                        res.cookie("accessToken", accessToken,{
                            httpOnly: false,
                            secure: false,
                            maxAge: 1000*60*60                            
                        }).status(201).json({estado:`logado ${user.username}`, accessToken})
                    }
                    
                })
            }
            
        } catch (error) {
            res.status(400).json({error:error})
        }
    },

    findUser: async (req, res)=>{
        const username = req.body.username        
        
        User.findOne({username:username}).then((user)=>{
            
            if(!user){
                res.json({message:"usuário não existe"})
            } else{                
                res.json({message: "usuário encontrado", data:user})
            }                
            
        }).catch((err)=>{
            console.log(err);
        });    
             
        
    }
}

