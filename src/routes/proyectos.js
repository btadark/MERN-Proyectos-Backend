// Rutas para los proyectos
const { Router } = require("express");
const auth = require("../middleware/auth");
const { check } = require("express-validator");
const {
  crearProyecto,
  obtenerProyectos,
  actualizarProyecto,
  eliminarProyecto,
} = require("../controllers/proyectoController");

// api/proyectos
const router = Router();

// Crear Proyecto
router.post(
  "/",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  crearProyecto
);

// Obtener Proyectos
router.get("/", auth, obtenerProyectos);

// Actualizar Proyecto via ID
router.put(
  "/:id",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  actualizarProyecto
);

// Eliminar Proyecto
router.delete("/:id", auth, eliminarProyecto);

module.exports = router;
