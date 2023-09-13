import * as jwt from 'jsonwebtoken'
import 'dotenv/config'

const createToken = (user) =>{
    const accessToken = jwt.sign({username:user.username}, `${process.env.SECRET}`)

    return accessToken
}

export default createToken