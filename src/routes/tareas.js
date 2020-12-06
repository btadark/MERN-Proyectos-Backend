// Rutas para los proyectos
const { Router } = require("express");
const auth = require("../middleware/auth");
const { check } = require("express-validator");
const {
  crearTarea,
  obtenerTareas,
  actualizarTarea,
  eliminarTarea,
} = require("../controllers/tareaController");

// api/tareas
const router = Router();

// Crear Tarea
router.post(
  "/",
  auth,
  [check("nombre", "El Nombre es obligatorio").not().isEmpty()],
  [check("proyecto", "El Proyecto es obligatorio").not().isEmpty()],
  crearTarea
);

// Obtener Tareas por Proyecto
router.get("/", auth, obtenerTareas);

// Actualizar Tarea
router.put("/:id", auth, actualizarTarea);

// Eliminar Tarea
router.delete("/:id", auth, eliminarTarea);

module.exports = router;
