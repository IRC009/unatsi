const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//esto es para poder actualizar la fecha de las siguientes clases y poder hacer cambios sin tener que programarlos de nuevo
const schemaAdministracion = new Schema({
    fecha: Number
})