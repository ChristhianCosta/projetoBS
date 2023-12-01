/*
    por nada eu consegui fazer essa função funcionar, talvez seja
    relacionado a característica httpOnly do cookie, mas não sei
*/

const logout = (req, res, next) =>{
    
    const accessToken = req.cookies.accessToken       
   

    res.clearCookie("accessToken").json({message:"erro de autenticação"})


    
}

export default logout