import jwt from "jsonwebtoken";
import 'dotenv/config'

const {verify} = jwt

const authToken = (req, res, next) =>{
   
    const accessToken = req.cookies.accessToken
    console.log("chegou em auth token")
    
    console.log(accessToken)
    try {
        const user = verify(accessToken, process.env.SECRET);
        console.log("verificou")
        req.user = user
        next()
    } catch (error) {
        res.clearCookie("acessToken").json({message:"erro de autenticação", error:error})


    }
}

export default authToken