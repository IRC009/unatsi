const jwt = require("jsonwebtoken");

const validarToken = (req,res,next)=>{
    const token = req.cookies.authToken;
    if(!token){
        return res.status(401).json({error:"acceso denegado"})
    }
    try {
        const verificar = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = verificar;
        next();
    } catch (error) {
        res.status(400).json({error:"token no es valido"})
    }
}

module.exports = validarToken;