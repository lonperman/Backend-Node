"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuarios = require("../controllers/usuarios.controller");

var router = (0, _express.Router)(); // /api/usuarios/

router.post('/', _usuarios.createUsuarios);
router.get('/', _usuarios.consultUsuarios); // /api/usuarios/some usuario

router.get('/:idUsuario', _usuarios.oneUsuario);
var _default = router;
exports["default"] = _default;