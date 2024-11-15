"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _morgan = _interopRequireDefault(require("morgan"));
var _users_routes = _interopRequireDefault(require("./routes/users_routes"));
var _clients_routes = _interopRequireDefault(require("./routes/clients_routes"));
var _services_routes = _interopRequireDefault(require("./routes/services_routes"));
var _barbers_routes = _interopRequireDefault(require("./routes/barbers_routes"));
var _turns_routes = _interopRequireDefault(require("./routes/turns_routes"));
var _hours_routes = _interopRequireDefault(require("./routes/hours_routes"));
var _dotenv = require("dotenv");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//Routes

(0, _dotenv.config)();
var express = require("express");
var cors = require("cors");
var app = express();

//Settings
app.use("/uploads", express["static"]("/uploads"));
app.use("/uploads/imageBarbers", express["static"]("/uploads/imageBarbers"));
app.use(cors());
app.set("port", process.env.PORT);

//Middlewares (funciones intermedias entre una peticion y una respuesta)
app.use((0, _morgan["default"])("dev"));
app.use(express.json());

//Routes
app.use("/api/users", _users_routes["default"]);
app.use("/api/clients", _clients_routes["default"]);
app.use("/api/services", _services_routes["default"]);
app.use("/api/barbers", _barbers_routes["default"]);
app.use("/api/turns", _turns_routes["default"]);
app.use("/api/hours", _hours_routes["default"]);
var _default = exports["default"] = app;