import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
import 'dotenv/config'

const createToken = (user) =>{
    
    const accessToken = sign({username:user.username}, process.env.SECRET)

    return accessToken
}

export default createToken