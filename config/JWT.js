import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
import 'dotenv/config'

const createToken = (user) =>{
    
    const accessToken = sign({username:user.username, email:user.email}, process.env.SECRET,{
        expiresIn:60*30
    })

    return accessToken
}

export default createToken