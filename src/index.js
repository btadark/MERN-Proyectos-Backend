const express = require("express");
const morgan = require("morgan");
const conectarDB = require("./config/db");
const cors = require("cors");

// Crear el servidor
const app = express();

// puerto de la app
const port = process.env.port || 4000;

// conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// Utilizar morgan
app.use(morgan("dev"));

// Habilitar express.json
app.use(express.json({ extend: true }));

// Importar rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/proyectos", require("./routes/proyectos"));
app.use("/api/tareas", require("./routes/tareas"));

// arrancar la app
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
