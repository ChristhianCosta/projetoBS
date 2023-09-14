import jwt from "jsonwebtoken";
import 'dotenv/config'

const {verify} = jwt

const authToken = (req, res, next) =>{
    const acessToken = req.cookie.acessToken
    console.log("chegou em auth token")
    
    try {
        const user = verify(acessToken, process.env.SECRET);
        console.log("verificou")
        req.user = user
        next()
    } catch (error) {
        res.clearCookie("acessToken").json({message:"erro de autenticação", error:error})


    }
}

export default authToken