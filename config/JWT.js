import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
import 'dotenv/config'

const createToken = (user) =>{
    
    const accessToken = sign({username:user.username, id:user._id}, process.env.SECRET,{
        expiresIn:60*30*1000
    })

    return accessToken
}

export default createToken