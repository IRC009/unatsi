const res = require("express/lib/response");
const user = require("../models/users");
let prueba = true;
let prueba2 = true;
const regex = /^[0-9]*$/; // es un regex y ayuda a verificar si la entrada contiene solo numeros
const validar = async (body,res,array) =>{
    if(body.email.includes("@") && body.email.includes(".")){
        if(regex.test(body.telefono) && body.telefono.length >0){
            if(body.nombre.trim() !== ""){
                if(body.apellidos.trim() !== ""){
                    array.forEach(element => {
                        if(element.email !== body.email){
                            prueba = true;

                        }
                        else{
                            prueba2 = false;
                        }
                    });
                        if(prueba2 == true){
                            console.log(typeof body.email)
                            const guardar = new user(body);
                            await guardar.save();

                            res.redirect("/registro-exitoso");
                        }else{
                            
                            res.render("error",{mensaje:"El correo ingresado ya existe",nombre:"correo existente"})
                        }
                    }else{
                        res.render("error",{mensaje:"Debe llenar todos los campos",nombre:"error de apellido"})
                    }
            }else{
                res.render("error",{mensaje:"Debe llenar todos los campos",nombre:"error de nombre"})
            }
        }else{
            res.render("error",{mensaje:"Ingrese un numero de telefono valido",nombre:"error de telefono"})
        }
        
    }else{
        res.render("error",{mensaje:"Ingrese un email valido",nombre:"error de email"})
    }
}

module.exports = validar