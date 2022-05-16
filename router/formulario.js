const express = require("express");
const conectarDB = require("./db");
const user = require("../models/users");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
const router = express.Router();

conectarDB();
const schemaRegister = Joi.object({
    nombre: Joi.string().min(2).max(50).required(),
    apellidos: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(6).max(255).required().email(),
    pais: Joi.string().min(2).max(255).required()
})
router.get("/",(req,res)=>{
    res.render("registro");
});

router.post("/",async (req,res)=>{
    const body = req.body;
    const bodyS = {
        nombre: body.nombre,
        apellidos: body.apellidos,
        email: body.email,
        pais: body.pais
    };
    const {error} = schemaRegister.validate(bodyS);
    if(error){
        return res.json({ error: error.details[0].message})
    }
    const isEmailExist = await user.findOne({email : req.body.email});//con esto valido el email que no exista
    if(isEmailExist){
        return res.json(
            {error: 'Email ya registrado'}
        )
    }
    if(body.telefono.length < 8 || body.telefono.length > 15){
        return res.json(
            {error: 'ingrese un número de telefono valido'}
        )
    }
    const regex = /^[0-9]*$/; // es una expresion irregular
    const onlyNumbers = regex.test(body.telefono); //no sé  como validad numéros asi que uso esto por ahora
    if(!onlyNumbers){
        
        return res.status(400).json(
            {error: 'ingrese un telefono valido'}
        )
    }
    const objeto = new user({
        nombre: body.nombre,
        apellidos: body.apellidos,
        email: body.email,
        pais: body.pais,
        telefono: body.telefono,
        date: new Date()
    });

    try {
        const savedUser = await objeto.save();
        console.log("saved")
        //si todo sale bien respondemos con un json
        const token = jwt.sign({
            data:savedUser._id
        },process.env.TOKEN_SECRET);
    
        res.cookie("authToken",token,{httpOnly:true}) //httpOnly para que no se pida desde el cliente
        res.json({
            mensaje: "registro exitoso"
        });
            
    } catch (error) {
        //estado de error
        res.json({error})
    }
    
})
//esto nos sirve para eliminar la cookie, en caso de que ya no lo queramos usar
//una idea a probar es usar el metodo post desde un boton de cerrar sesion y así podamos eliminare la cookie
// router.get("/eliminar-cookie",(req,res)=>{
//     res.clearCookie("authToken");
//     res.end();
// })

module.exports = router;