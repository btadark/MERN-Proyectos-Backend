// Rutas para autenticar usuarios
const { Router } = require("express");
const { check } = require("express-validator");
const {
  autenticarUsuario,
  usuarioAutenticado,
} = require("../controllers/authController");
const auth = require("../middleware/auth");
const router = Router();

// Iniciar sesion
// Crea un usuario --> api/auth
router.post("/", autenticarUsuario);

// Obtiene el usuario autenticado
router.get("/", auth, usuarioAutenticado);

module.exports = router;
