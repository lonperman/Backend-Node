"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _database = require("../database/database");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

//import inscripciones from './inscripciones';
var usuarios = _database.sequelize.define('usuarios', {
  idUsuario: {
    type: _sequelize["default"].INTEGER,
    primarykey: true
  },
  nomUsuario: {
    type: _sequelize["default"].TEXT
  },
  correo: {
    type: _sequelize["default"].TEXT
  },
  telefono: {
    type: _sequelize["default"].TEXT
  },
  contraseña: {
    type: _sequelize["default"].TEXT
  },
  sexo: {
    type: _sequelize["default"].TEXT
  },
  tipo: {
    type: _sequelize["default"].TEXT
  }
}); //usuarios.hasMany(inscripciones, {foreinKey: 'idUsuario', sourceKey: 'idUsuario'});
//inscripciones.belongTo(usuarios, {foreingKet: 'idUsuario', sourceKey: 'idUsuario'});


var _default = usuarios;
exports["default"] = _default;