"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
// Determina el archivo .env a cargar
var envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env";
(0, _dotenv.config)({
  path: envFile
}); // Carga el archivo correspondiente

// Opcional: verificar que se cargaron las variables
console.log("Loaded environment variables from:", envFile);
// config();
var _default = exports["default"] = {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || "",
  port: process.env.PORT || ""
};