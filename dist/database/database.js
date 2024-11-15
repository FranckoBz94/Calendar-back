"use strict";

var _config = _interopRequireDefault(require("../config"));
var _mysql = _interopRequireDefault(require("mysql2"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import mysql from "promise-mysql";

console.log("config,", _config["default"]);
var connection = _mysql["default"].createConnection({
  host: _config["default"].host,
  database: _config["default"].database,
  user: _config["default"].user,
  password: _config["default"].password
}).promise();
var getConnection = function getConnection() {
  return connection;
};
module.exports = {
  getConnection: getConnection
};