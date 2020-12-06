const { Schema, model } = require("mongoose");

const ProyectoSchema = Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  creador: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    // required: true,
  },
  creado: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Proyecto", ProyectoSchema);
