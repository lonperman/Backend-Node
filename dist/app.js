"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _eventos = _interopRequireDefault(require("./routes/eventos"));

var _conferencistas = _interopRequireDefault(require("./routes/conferencistas"));

var _usuarios = _interopRequireDefault(require("./routes/usuarios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

//importing routes
//initialization
var app = (0, _express["default"])(); //middelwares

app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //routes

app.use('/api/eventos', _eventos["default"]);
app.use('/api/conferencistas', _conferencistas["default"]);
app.use('/api/usuarios', _usuarios["default"]);
var _default = app;
exports["default"] = _default;