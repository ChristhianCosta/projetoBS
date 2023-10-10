const logout = (req, res, next) =>{
    
    const accessToken = req.cookies.accessToken       
   

    res.clearCookie("accessToken").json({message:"erro de autenticação"})


    
}

export default logout