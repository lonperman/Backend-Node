"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUsuarios = createUsuarios;
exports.consultUsuarios = consultUsuarios;
exports.oneUsuario = oneUsuario;

var _usuarios = _interopRequireDefault(require("../models/usuarios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createUsuarios(req, res) {
  /*const {idUsuario, nomUsuario, correo, telefono, contraseña, sexo, tipo} = req.body;
  try{
      let newUsuario = await usuarios.createUsuarios({
          idUsuario,
          nomUsuario,
          correo,
          telefono,
          contraseña,
          sexo,
          tipo
  
      });*/
  res.send('received');
  /*}catch(e){
      res.status(500).json({
          message: 'e'
      });
  }*/
}

function consultUsuarios(_x, _x2) {
  return _consultUsuarios.apply(this, arguments);
}

function _consultUsuarios() {
  _consultUsuarios = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _usuarios["default"].findAll();

          case 3:
            res.json({
              data: _usuarios["default"]
            });
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: 'e'
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _consultUsuarios.apply(this, arguments);
}

function oneUsuario(_x3, _x4) {
  return _oneUsuario.apply(this, arguments);
}

function _oneUsuario() {
  _oneUsuario = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var idUsuario, usuario;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            idUsuario = request.params.idUsuario;
            _context2.next = 4;
            return _usuarios["default"].finOne({
              where: {
                idUsuario: idUsuario
              }
            });

          case 4:
            usuario = _context2.sent;
            res.json({
              data: usuario
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: 'e'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _oneUsuario.apply(this, arguments);
}