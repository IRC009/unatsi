require("dotenv").config();
const express = require("express");
const formulario = require("./router/formulario");
const bodyParser = require("body-parser");
const mensaje = require("./router/mensaje_exito");
const encuesta = require("./router/encuesta");
const inicio = require("./router/inicio");
const validarToken = require("./router/validar-token");
const cookieParser = require("cookie-parser"); //lo usamos para poder acceder a las cookies
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser());

app.set("view engine","ejs");
app.set("views",__dirname + "/views");

app.use(express.static(__dirname + "/public"));
app.use("/",inicio);
app.use("/registro",formulario);
app.use("/registro-exitoso",validarToken,mensaje);
app.use("/encuesta",encuesta);

app.use((req,res,next)=>{
    res.status(404).render("404",{mensaje:"Esta página no está disponible", nombre:"404"});
})
app.listen(process.env.PORT);