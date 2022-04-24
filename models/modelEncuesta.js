const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaEncuesta = new Schema({
    opcion1: Boolean,
    opcion2: Boolean,
    opcion3: Boolean,
    opcion4: Boolean,
    ip: String
});

const modelEncuesta = mongoose.model("sesionencuestas",schemaEncuesta);

module.exports = modelEncuesta;