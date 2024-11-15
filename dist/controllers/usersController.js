"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersController = void 0;
var _database = require("../database/database");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var bcrypt = require("bcrypt");
var fs = require("node:fs");
var table = "usuarios_sistema";
var jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
var crypto = require("crypto");
var moment = require("moment-timezone");
var transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.ETHEREAL_USER,
    pass: process.env.ETHEREAL_PASS
  }
});
var getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var connection, _yield$connection$que, _yield$connection$que2, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          connection = _context.sent;
          _context.next = 6;
          return connection.query("select * from " + table);
        case 6:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          result = _yield$connection$que2[0];
          res.json(result);
          _context.next = 16;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getUserLogged = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, connection, _yield$connection$que3, _yield$connection$que4, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context2.sent;
          _context2.next = 7;
          return connection.query("select * from " + table + " where id=" + id);
        case 7:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          result = _yield$connection$que4[0];
          res.json(result);
          _context2.next = 17;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send(_context2.t0.message);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function getUserLogged(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var addUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var user, fechaCreacion, connection, hashedPassword, timestamp, urlImage, maxLength, originalName, sanitizedOriginalName, fileExtension, baseName, shortenedName, isBarberInt, isAdminInt, _yield$connection$que5, _yield$connection$que6, existingUser, _yield$connection$que7, _yield$connection$que8, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          user = req.body;
          fechaCreacion = new Date();
          _context3.next = 5;
          return (0, _database.getConnection)();
        case 5:
          connection = _context3.sent;
          _context3.next = 8;
          return bcrypt.hash("1234", 10);
        case 8:
          hashedPassword = _context3.sent;
          // Hash de la contraseña
          timestamp = Date.now();
          urlImage = "";
          if (req.file) {
            maxLength = 50;
            originalName = req.file.originalname; // Sanitizar el nombre del archivo, reemplazando caracteres especiales con guiones bajos
            sanitizedOriginalName = originalName.replace(/[^a-zA-Z0-9.]/g, "_"); // Extraer la extensión del archivo
            fileExtension = sanitizedOriginalName.split(".").pop(); // Acortar el nombre del archivo si es necesario
            baseName = sanitizedOriginalName.substring(0, sanitizedOriginalName.lastIndexOf("."));
            shortenedName = baseName.length > maxLength ? baseName.substring(0, maxLength) : baseName; // Generar el nombre final del archivo que se guardará
            urlImage = "uploads/".concat(timestamp, "_").concat(shortenedName, ".").concat(fileExtension);
          } else {
            urlImage = "uploads/profile.png"; // Imagen predeterminada si no se sube una imagen
          }
          isBarberInt = user.is_barber === "true" ? 1 : 0;
          isAdminInt = user.is_admin === "true" ? 1 : 0; // Verificar si el correo electrónico ya existe en la base de datos
          _context3.next = 16;
          return connection.query("SELECT * FROM ".concat(table, " WHERE email = ?"), [user.email]);
        case 16:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          existingUser = _yield$connection$que6[0];
          if (!(existingUser.length > 0)) {
            _context3.next = 21;
            break;
          }
          return _context3.abrupt("return", res.json({
            rta: -2,
            message: "El correo electrónico ya está registrado."
          }));
        case 21:
          _context3.next = 23;
          return connection.query("INSERT INTO ".concat(table, "\n    (firstName, lastName, email, password, is_barber, is_admin, fecha_creacion, url_image)\n    VALUES\n    (?, ?, ?, ?, ?, ?, ?, ?)"), [user.firstName, user.lastName, user.email, hashedPassword, isBarberInt, isAdminInt, fechaCreacion, urlImage]);
        case 23:
          _yield$connection$que7 = _context3.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          result = _yield$connection$que8[0];
          if (result.affectedRows > 0) {
            if (req.file) {
              saveImage(urlImage, req.file);
            }
            res.json({
              rta: 1,
              message: "Usuario agregado exitosamente."
            });
          } else {
            res.json({
              rta: -1,
              message: "Ocurrió un error."
            });
          }
          _context3.next = 32;
          break;
        case 29:
          _context3.prev = 29;
          _context3.t0 = _context3["catch"](0);
          res.json({
            rta: -1,
            message: "Ocurrió un error: " + _context3.t0
          });
        case 32:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 29]]);
  }));
  return function addUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateStateUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var isBarber, id, connection, _yield$connection$que9, _yield$connection$que10, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          isBarber = req.body.isBarber;
          id = req.params.id;
          _context4.next = 5;
          return (0, _database.getConnection)();
        case 5:
          connection = _context4.sent;
          _context4.next = 8;
          return connection.query("UPDATE ".concat(table, " SET is_barber = ? WHERE id = ?"), [isBarber, id]);
        case 8:
          _yield$connection$que9 = _context4.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          result = _yield$connection$que10[0];
          if (result.affectedRows > 0) {
            res.json({
              rta: 1,
              message: "Se actualizo correctamente."
            });
          } else {
            res.json({
              rta: -1,
              message: "Ocurrio un error."
            });
          }
          _context4.next = 18;
          break;
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          res.json({
            rta: -1,
            message: "Ocurrio un error, catch." + _context4.t0
          });
          res.send(_context4.t0.message);
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 14]]);
  }));
  return function updateStateUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, timestamp, url_image, maxLength, originalName, sanitizedOriginalName, fileExtension, baseName, shortenedName, _req$body, firstName, lastName, email, is_admin, isAdminInt, user, connection, _yield$connection$que11, _yield$connection$que12, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          timestamp = Date.now();
          url_image = "";
          if (req.file) {
            maxLength = 50;
            originalName = req.file.originalname; // Sanitizar el nombre del archivo
            sanitizedOriginalName = originalName.replace(/[^a-zA-Z0-9.]/g, "_"); // Extraer la extensión del archivo
            fileExtension = sanitizedOriginalName.split(".").pop(); // Acortar el nombre del archivo si es necesario
            baseName = sanitizedOriginalName.substring(0, sanitizedOriginalName.lastIndexOf("."));
            shortenedName = baseName.length > maxLength ? baseName.substring(0, maxLength) : baseName; // Generar el nombre final del archivo que se guardará
            url_image = "uploads/".concat(timestamp, "_").concat(shortenedName, ".").concat(fileExtension);
          } else {
            url_image = req.body.imageProfile;
          }
          console.log("update image", url_image);
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, is_admin = _req$body.is_admin;
          isAdminInt = is_admin === "true" ? 1 : 0;
          if (id === undefined || firstName === undefined || lastName === undefined || email === undefined) {
            res.json({
              rta: -1,
              message: "Ocurrio un problema, por favor complete todos los campos"
            });
          }
          user = _objectSpread({
            firstName: firstName,
            lastName: lastName,
            email: email,
            is_admin: isAdminInt
          }, req.file && {
            url_image: url_image
          });
          _context5.next = 12;
          return (0, _database.getConnection)();
        case 12:
          connection = _context5.sent;
          _context5.next = 15;
          return connection.query("UPDATE ".concat(table, "  SET ? where id= ?"), [user, id]);
        case 15:
          _yield$connection$que11 = _context5.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          result = _yield$connection$que12[0];
          console.log("result", result);
          if (result.affectedRows > 0) {
            if (req.file) {
              saveImage(url_image, req.file);
            }
            res.json({
              rta: 1,
              message: "Se actualizo correctamente."
            });
          } else {
            res.json({
              rta: -1,
              message: "Ocurrio un error."
            });
          }
          _context5.next = 26;
          break;
        case 22:
          _context5.prev = 22;
          _context5.t0 = _context5["catch"](0);
          res.json({
            rta: -1,
            message: "Ocurrio un error, catch." + _context5.t0
          });
          res.send(_context5.t0.message);
        case 26:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 22]]);
  }));
  return function updateUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, connection, _yield$connection$que13, _yield$connection$que14, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context6.sent;
          _context6.next = 7;
          return connection.query("delete from ".concat(table, "  where id = ?"), id);
        case 7:
          _yield$connection$que13 = _context6.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          result = _yield$connection$que14[0];
          console.log("result", result);
          if (result.affectedRows > 0) {
            res.json({
              rta: 1,
              message: "Usuario eliminado correctamente."
            });
          } else {
            res.json({
              rta: -1,
              message: "Ocurrio un error."
            });
          }
          _context6.next = 18;
          break;
        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](0);
          res.json({
            rta: -1,
            message: "Ocurrio un error."
          });
          res.send(_context6.t0.message);
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 14]]);
  }));
  return function deleteUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
function saveImage(filePath, file) {
  var newPath = "./".concat(filePath);
  fs.renameSync(file.path, newPath);
  return newPath;
}
var login = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body2, email, password, connection, _yield$connection$que15, _yield$connection$que16, result, hashedPasswordFromDB, isPasswordCorrect, firstName, token;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context7.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context7.sent;
          _context7.next = 7;
          return connection.query("SELECT * FROM ".concat(table, " WHERE email = ?"), [email]);
        case 7:
          _yield$connection$que15 = _context7.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          result = _yield$connection$que16[0];
          if (!(result.length > 0)) {
            _context7.next = 18;
            break;
          }
          hashedPasswordFromDB = result[0].password;
          _context7.next = 14;
          return bcrypt.compare(password, hashedPasswordFromDB);
        case 14:
          isPasswordCorrect = _context7.sent;
          if (isPasswordCorrect) {
            firstName = result[0].firstName;
            token = jwt.sign({
              firstName: firstName
            }, "Stack", {
              expiresIn: "1d"
            });
            res.json({
              rta: 1,
              message: result[0],
              token: token
            });
          } else {
            res.json({
              rta: -1,
              message: "Usuario y/o contraseña incorrecta."
            });
          }
          _context7.next = 19;
          break;
        case 18:
          res.json({
            rta: -1,
            message: "Usuario y/o contraseña incorrectaa."
          });
        case 19:
          _context7.next = 24;
          break;
        case 21:
          _context7.prev = 21;
          _context7.t0 = _context7["catch"](0);
          res.json({
            rta: -1,
            message: "Ocurrio un error." + _context7.t0
          });
        case 24:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 21]]);
  }));
  return function login(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getDataGraphicsUser = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body3, id, formattedStartDate, formattedEndDate, barberId, connection, query, _yield$connection$que17, _yield$connection$que18, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$body3 = req.body, id = _req$body3.id, formattedStartDate = _req$body3.formattedStartDate, formattedEndDate = _req$body3.formattedEndDate;
          barberId = id !== 0 ? id : null;
          _context8.next = 5;
          return (0, _database.getConnection)();
        case 5:
          connection = _context8.sent;
          query = "\n      SELECT \n        T.service_id, \n        COUNT(*) AS cantidad_turnos, \n        S.name_service \n      FROM \n        turnos T \n      INNER JOIN \n        servicios S \n      ON \n        T.service_id = S.id \n      WHERE \n        1=1"; // Incluir `1=1` para simplificar la lógica de concatenación
          // Si id no es 'all', agregar el filtro para barber_id
          if (barberId !== null) {
            query += " AND t.barber_id = ?";
          }
          query += " AND T.fecha_reserva BETWEEN ? AND ?";
          query += "\n      GROUP BY \n        T.service_id, \n        S.name_service\n    ";
          _context8.next = 12;
          return connection.query(query, barberId !== null ? [barberId, formattedStartDate, formattedEndDate] : [formattedStartDate, formattedEndDate]);
        case 12:
          _yield$connection$que17 = _context8.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          result = _yield$connection$que18[0];
          res.json(result);
          _context8.next = 21;
          break;
        case 18:
          _context8.prev = 18;
          _context8.t0 = _context8["catch"](0);
          res.status(500).send(_context8.t0.message);
        case 21:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 18]]);
  }));
  return function getDataGraphicsUser(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getDataTurnsGraphics = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var connection, _req$body4, id, formattedStartDate, formattedEndDate, query, queryParams, _yield$connection$que19, _yield$connection$que20, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          console.log(req.body);
          _context9.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context9.sent;
          _req$body4 = req.body, id = _req$body4.id, formattedStartDate = _req$body4.formattedStartDate, formattedEndDate = _req$body4.formattedEndDate;
          console.log("formattedStartDate", formattedStartDate);
          console.log("formattedEndDate", formattedEndDate);
          // Construcción de la consulta SQL
          query = "\n      SELECT \n        t.barber_id, \n        b.firstName AS nameBarber, \n        b.lastName AS lastNameBarber, \n        YEAR(t.fecha_reserva) AS year, \n        MONTH(t.fecha_reserva) AS month, \n        COUNT(*) AS total_turnos \n      FROM \n        turnos t \n      INNER JOIN \n        barberos b ON t.barber_id = b.id \n      WHERE \n        t.fecha_reserva BETWEEN ? AND ?";
          queryParams = [formattedStartDate, formattedEndDate];
          if (id !== 0) {
            query += " AND t.barber_id = ?";
            queryParams.push(id);
          }

          // Continuar construyendo la consulta
          query += "\n      GROUP BY \n        t.barber_id, \n        b.firstName, \n        b.lastName, \n        YEAR(t.fecha_reserva), \n        MONTH(t.fecha_reserva) \n      ORDER BY \n        YEAR(t.fecha_reserva), \n        MONTH(t.fecha_reserva);\n    ";
          _context9.next = 14;
          return connection.query(query, queryParams);
        case 14:
          _yield$connection$que19 = _context9.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          result = _yield$connection$que20[0];
          res.json(result);
          _context9.next = 23;
          break;
        case 20:
          _context9.prev = 20;
          _context9.t0 = _context9["catch"](0);
          res.status(500).send(_context9.t0.message);
        case 23:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 20]]);
  }));
  return function getDataTurnsGraphics(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var getTurnsDayWeek = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var connection, _req$body5, id, formattedStartDate, formattedEndDate, query, queryParams, _yield$connection$que21, _yield$connection$que22, result;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return (0, _database.getConnection)();
        case 3:
          connection = _context10.sent;
          _req$body5 = req.body, id = _req$body5.id, formattedStartDate = _req$body5.formattedStartDate, formattedEndDate = _req$body5.formattedEndDate;
          query = "\n      WITH dias_semana AS (\n        SELECT 1 AS dia_num, 'Domingo' AS nombre_dia\n        UNION ALL SELECT 2, 'Lunes'\n        UNION ALL SELECT 3, 'Martes'\n        UNION ALL SELECT 4, 'Mi\xE9rcoles'\n        UNION ALL SELECT 5, 'Jueves'\n        UNION ALL SELECT 6, 'Viernes'\n        UNION ALL SELECT 7, 'S\xE1bado'\n      )\n      SELECT \n        ds.nombre_dia,\n        COALESCE(COUNT(t.fecha_reserva), 0) AS cantidad_cortes\n      FROM \n        dias_semana ds\n      LEFT JOIN \n        turnos t \n      ON \n        DAYOFWEEK(t.fecha_reserva) = ds.dia_num\n      WHERE\n        t.fecha_reserva BETWEEN ? AND ?";
          queryParams = [formattedStartDate, formattedEndDate]; // Agregar condición para filtrar por barber_id si es necesario
          if (id !== 0) {
            query += " AND t.barber_id = ?";
            queryParams.push(id);
          }

          // Continuar construyendo la consulta
          query += "\n      GROUP BY \n        ds.nombre_dia\n      ORDER BY \n        FIELD(ds.nombre_dia, 'Lunes', 'Martes', 'Mi\xE9rcoles', 'Jueves', 'Viernes', 'S\xE1bado', 'Domingo');\n    ";

          // Ejecutar la consulta con parámetros
          _context10.next = 11;
          return connection.query(query, queryParams);
        case 11:
          _yield$connection$que21 = _context10.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          result = _yield$connection$que22[0];
          console.log("result", result); // Verificar el resultado completo

          res.json(result);
          _context10.next = 21;
          break;
        case 18:
          _context10.prev = 18;
          _context10.t0 = _context10["catch"](0);
          res.status(500).send(_context10.t0.message);
        case 21:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 18]]);
  }));
  return function getTurnsDayWeek(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var forgotPassword = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var email, connection, _yield$connection$que23, _yield$connection$que24, existingUser, resetToken, resetPasswordExpire, resetUrl, mailOptions;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          email = req.body.email;
          _context11.prev = 1;
          _context11.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context11.sent;
          _context11.next = 7;
          return connection.query("SELECT * FROM ".concat(table, " WHERE email = ?"), [email]);
        case 7:
          _yield$connection$que23 = _context11.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          existingUser = _yield$connection$que24[0];
          console.log("existe", existingUser);
          if (!(existingUser.length > 0)) {
            _context11.next = 21;
            break;
          }
          resetToken = crypto.randomBytes(20).toString("hex");
          resetPasswordExpire = new Date(Date.now() + 3600000); // 1 hora en milisegundos
          _context11.next = 16;
          return connection.query("UPDATE ".concat(table, " SET resetPasswordToken = ?, resetPasswordExpire = ? WHERE email = ?"), [resetToken, resetPasswordExpire, email]);
        case 16:
          // URL para restablecer la contraseña (ajusta según tu aplicación)
          resetUrl = "".concat(process.env.URL_FRONT, "/reset-password?token=").concat(resetToken);
          mailOptions = {
            from: process.env.ETHEREAL_USER,
            to: email,
            subject: "Restablece tu contraseña",
            html: "<div style=\"font-family: Arial, sans-serif; color: #333; line-height: 1.6;\">\n          <h2 style=\"color: #4CAF50;\">Solicitud de restablecimiento de contrase\xF1a</h2>\n          <p>Hola,</p>\n          <p>Has solicitado restablecer tu contrase\xF1a. Haz clic en el bot\xF3n de abajo para continuar con el proceso:</p>\n          <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"".concat(resetUrl, "\" \n            style=\"display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;\">\n            Restablecer Contrase\xF1a\n          </a>\n          <p>Si no solicitaste este cambio, puedes ignorar este correo.</p>\n          <p>Gracias,</p>\n          <p><strong>Equipo de soporte de Tu Empresa</strong></p>\n          <hr />\n          <small style=\"color: #999;\">Este enlace es v\xE1lido por 1 hora.</small>\n        </div>")
          }; // Enviar el correo
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.error("Error al enviar el correo:", error);
              return res.status(500).json({
                success: false,
                message: "Error al enviar el correo: " + error.message
              });
            }
            return res.status(200).json({
              success: true,
              message: "Correo de restablecimiento enviado."
            });
          });
          _context11.next = 22;
          break;
        case 21:
          return _context11.abrupt("return", res.status(404).json({
            success: false,
            message: "Usuario no encontrado."
          }));
        case 22:
          _context11.next = 27;
          break;
        case 24:
          _context11.prev = 24;
          _context11.t0 = _context11["catch"](1);
          res.status(500).json({
            success: false,
            message: "Error en el servidor."
          });
        case 27:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 24]]);
  }));
  return function forgotPassword(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var resetPassword = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body6, token, password, connection, now, localDateInBuenosAires, _yield$connection$que25, _yield$connection$que26, user, hashedPassword;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          console.log("req.bod", req.body);
          _req$body6 = req.body, token = _req$body6.token, password = _req$body6.password;
          _context12.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context12.sent;
          now = new Date();
          localDateInBuenosAires = moment(now).tz("America/Argentina/Buenos_Aires").format("YYYY-MM-DD HH:mm:ss");
          _context12.next = 9;
          return connection.query("SELECT * FROM ".concat(table, " WHERE resetPasswordToken = ? AND resetPasswordExpire > ?"), [token, localDateInBuenosAires]);
        case 9:
          _yield$connection$que25 = _context12.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          user = _yield$connection$que26[0];
          if (!(!user || user.length === 0)) {
            _context12.next = 14;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            success: false,
            message: "Token inválido o expirado."
          }));
        case 14:
          _context12.next = 16;
          return bcrypt.hash(password, 10);
        case 16:
          hashedPassword = _context12.sent;
          _context12.next = 19;
          return connection.query("UPDATE ".concat(table, " SET password = ?, resetPasswordToken = NULL, resetPasswordExpire = NULL WHERE id = ?"), [hashedPassword, user[0].id]);
        case 19:
          return _context12.abrupt("return", res.status(200).json({
            success: true,
            message: "Contraseña actualizada correctamente."
          }));
        case 20:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function resetPassword(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var usersController = exports.usersController = {
  getUsers: getUsers,
  addUser: addUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  login: login,
  getUserLogged: getUserLogged,
  updateStateUser: updateStateUser,
  getDataGraphicsUser: getDataGraphicsUser,
  getDataTurnsGraphics: getDataTurnsGraphics,
  getTurnsDayWeek: getTurnsDayWeek,
  forgotPassword: forgotPassword,
  resetPassword: resetPassword
};