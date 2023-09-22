import jwt from "jsonwebtoken";
import 'dotenv/config'


const {verify} = jwt

const authToken = (req, res, next) =>{
    console.log(req.cookies)
    const accessToken = req.cookies["accessToken"]      
   
    try {
        const user = verify(accessToken, process.env.SECRET);
        
        req.user = user
        next()
    } catch (error) {
        res.status(400).clearCookie("accessToken").json({message:"erro de autenticação", error:error})


    }
}

export default authToken