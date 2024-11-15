"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.turnsController = void 0;
var _moment = _interopRequireDefault(require("moment/moment"));
var _database = require("../database/database");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var nodemailer = require("nodemailer");
var table = "turnos";
var getTurns = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var idBarber, connection, _yield$connection$que, _yield$connection$que2, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          idBarber = req.params.id;
          _context.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context.sent;
          _context.next = 7;
          return connection.query("select t.*, c.firstName AS nameClient,c.lastName AS lastNameClient,s.event_color AS colorEvent, s.name_service as nameService, s.minutes_service as minutes from " + table + " t JOIN clientes c ON t.cliente_id = c.id LEFT JOIN servicios s ON t.service_id = s.id where t.barber_id = " + idBarber.toString());
        case 7:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          result = _yield$connection$que2[0];
          res.json(result);
          _context.next = 17;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.json({
            rta: -1,
            message: "Ocurrio un error."
          });
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function getTurns(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addTurn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var turn, fechaCreacion, connection, _yield$connection$que3, _yield$connection$que4, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          turn = req.body;
          console.log("turn", turn);
          fechaCreacion = new Date();
          _context2.next = 6;
          return (0, _database.getConnection)();
        case 6:
          connection = _context2.sent;
          _context2.next = 9;
          return connection.query("INSERT INTO ".concat(table, "\n    (fecha_reserva, fecha_reserva_creada, start_date, end_date, cliente_id, barber_id, service_id,price_service)\n    VALUES\n    (?, ?, ?, ?, ?, ?, ?,?)"), [turn.dateBooking, fechaCreacion, new Date(turn.start), new Date(turn.end), turn.idClient, turn.idBarber, turn.idService, turn.price]);
        case 9:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          result = _yield$connection$que4[0];
          if (result.affectedRows > 0) {
            res.json({
              rta: 1,
              message: "Turno registrado exitosamente."
            });
          } else {
            res.json({
              rta: -1,
              message: "Ocurrio un error."
            });
          }
          _context2.next = 19;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.json({
            rta: -1,
            message: "Ocurrio un errorrrr." + _context2.t0
          });
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 15]]);
  }));
  return function addTurn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateTurn = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, _req$body, dateBooking, start, end, idClient, idService, idBarber, turn, connection, _yield$connection$que5, _yield$connection$que6, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _req$body = req.body, dateBooking = _req$body.dateBooking, start = _req$body.start, end = _req$body.end, idClient = _req$body.idClient, idService = _req$body.idService, idBarber = _req$body.idBarber;
          if (dateBooking === undefined || start === undefined || end === undefined || idClient === undefined || idService === undefined || idBarber === undefined) {
            res.json({
              rta: -1,
              message: "Ocurrio un problema, por favor complete todos los campos"
            });
          }
          turn = {
            fecha_reserva: dateBooking,
            start_date: new Date(start),
            end_date: new Date(end),
            cliente_id: idClient,
            service_id: idService,
            barber_id: idBarber
          };
          _context3.next = 7;
          return (0, _database.getConnection)();
        case 7:
          connection = _context3.sent;
          _context3.next = 10;
          return connection.query("UPDATE ".concat(table, "  SET ? where id= ?"), [turn, id]);
        case 10:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          result = _yield$connection$que6[0];
          if (result.affectedRows > 0) {
            res.json({
              rta: 1,
              message: "Se actualizo correctamente."
            });
          } else {
            res.json({
              rta: -1,
              message: "OOcurrio un error."
            });
          }
          _context3.next = 20;
          break;
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          res.json({
            rta: -1,
            message: "Odddcurrio un error."
          });
          res.send(_context3.t0.message);
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return function updateTurn(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteTurn = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, connection, _yield$connection$que7, _yield$connection$que8, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context4.sent;
          _context4.next = 7;
          return connection.query("delete from ".concat(table, "  where id = ?"), id);
        case 7:
          _yield$connection$que7 = _context4.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          result = _yield$connection$que8[0];
          if (result.affectedRows > 0) {
            res.json({
              rta: 1,
              message: "Turno eliminado correctamente."
            });
          } else {
            res.json({
              rta: -1,
              message: "Ocurrio un error."
            });
          }
          _context4.next = 17;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          res.json({
            rta: -1,
            message: "Ocurrio un error."
          });
          res.send(_context4.t0.message);
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function deleteTurn(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var availableNextTurn = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body2, dateBooking, start_date, idBarber, endTimeCalendar, connection, _yield$connection$que9, _yield$connection$que10, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body2 = req.body, dateBooking = _req$body2.dateBooking, start_date = _req$body2.start_date, idBarber = _req$body2.idBarber, endTimeCalendar = _req$body2.endTimeCalendar;
          _context5.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context5.sent;
          _context5.next = 7;
          return connection.query("SELECT * from ".concat(table, " WHERE start_date>\"").concat(start_date, "\" and barber_id=").concat(idBarber, " and DATE_FORMAT(fecha_reserva, '%Y-%m-%d')=\"").concat(dateBooking, "\" ORDER BY start_date ASC LIMIT 1"));
        case 7:
          _yield$connection$que9 = _context5.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          result = _yield$connection$que10[0];
          res.json({
            rta: 1,
            message: result
          });
          _context5.next = 17;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.json({
            rta: -1,
            message: "Ocurrio un error."
          });
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 13]]);
  }));
  return function availableNextTurn(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var availableHoursOnSave = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, start_date, end_date, idBarber, connection, _yield$connection$que11, _yield$connection$que12, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$body3 = req.body, start_date = _req$body3.start_date, end_date = _req$body3.end_date, idBarber = _req$body3.idBarber;
          _context6.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context6.sent;
          _context6.next = 7;
          return connection.query("SELECT * from ".concat(table, " WHERE (start_date<\"").concat(end_date, "\" and end_date>\"").concat(start_date, "\") and barber_id=").concat(idBarber, "  ORDER BY start_date ASC LIMIT 1"));
        case 7:
          _yield$connection$que11 = _context6.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          result = _yield$connection$que12[0];
          res.json({
            rta: 1,
            message: result
          });
          _context6.next = 17;
          break;
        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](0);
          res.status(500);
          res.json({
            rta: -1,
            message: "Ocurrio un error."
          });
        case 17:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 13]]);
  }));
  return function availableHoursOnSave(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var availableDate = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body4, start_date, end_date, idBarber, connection, _yield$connection$que13, _yield$connection$que14, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body4 = req.body, start_date = _req$body4.start_date, end_date = _req$body4.end_date, idBarber = _req$body4.idBarber;
          _context7.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context7.sent;
          _context7.next = 7;
          return connection.query("SELECT COUNT(*) AS count_turns FROM turnos WHERE start_date>=\"".concat(start_date, "\" AND end_date <=\"").concat(end_date, "\" and barber_id=").concat(idBarber));
        case 7:
          _yield$connection$que13 = _context7.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          result = _yield$connection$que14[0];
          res.json({
            rta: 1,
            message: result
          });
          _context7.next = 17;
          break;
        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](0);
          res.status(500);
          res.json({
            rta: -1,
            message: "Ocurrio un error."
          });
        case 17:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 13]]);
  }));
  return function availableDate(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var searchTurnsProfits = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body5, formattedStartDate, formattedEndDate, idBarber, connection, _yield$connection$que15, _yield$connection$que16, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$body5 = req.body, formattedStartDate = _req$body5.formattedStartDate, formattedEndDate = _req$body5.formattedEndDate, idBarber = _req$body5.idBarber;
          _context8.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context8.sent;
          _context8.next = 7;
          return connection.query("SELECT T.fecha_reserva,T.start_date,T.end_date,T.price_service,C.firstName,C.lastName,B.firstName as nameBarber,B.lastName as lastNameBarber,S.name_service FROM turnos T INNER JOIN clientes C ON T.cliente_id = C.id INNER JOIN barberos B ON T.barber_id=B.id INNER JOIN servicios S ON T.service_id=S.id WHERE T.barber_id=\"".concat(idBarber, "\" and T.fecha_reserva>=\"").concat(formattedStartDate, "\" and T.fecha_reserva<=\"").concat(formattedEndDate, "\""));
        case 7:
          _yield$connection$que15 = _context8.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          result = _yield$connection$que16[0];
          res.json({
            rta: 1,
            dataProfit: result
          });
          _context8.next = 17;
          break;
        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](0);
          res.status(500);
          res.json({
            rta: -1,
            message: "Ocurrio un error." + _context8.t0
          });
        case 17:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 13]]);
  }));
  return function searchTurnsProfits(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var turnsDayAvailable = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body6, idBarber, start_date, minutes_services, connection, _yield$connection$que17, _yield$connection$que18, result;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$body6 = req.body, idBarber = _req$body6.idBarber, start_date = _req$body6.start_date, minutes_services = _req$body6.minutes_services;
          console.log(idBarber);
          console.log(start_date);
          console.log(minutes_services);
          _context9.next = 7;
          return (0, _database.getConnection)();
        case 7:
          connection = _context9.sent;
          _context9.next = 10;
          return connection.query("WITH RECURSIVE available_slots AS (\n        SELECT\n            TIMESTAMP(CONCAT('".concat(start_date, "', ' ', h.min_hour_calendar)) AS slot_start,\n            TIMESTAMP(CONCAT('").concat(start_date, "', ' ', h.min_hour_calendar)) + INTERVAL ").concat(minutes_services, " MINUTE AS slot_end,\n            h.max_hour_calendar\n        FROM\n            hours_calendar h\n        WHERE\n            id = 1\n\n        UNION ALL\n\n        SELECT\n            slot_start + INTERVAL 30 MINUTE,\n            slot_start + INTERVAL 30 MINUTE + INTERVAL ").concat(minutes_services, " MINUTE,\n            max_hour_calendar\n        FROM\n            available_slots\n        WHERE\n            slot_start + INTERVAL 30 MINUTE + INTERVAL ").concat(minutes_services, " MINUTE <= TIMESTAMP(CONCAT('").concat(start_date, "', ' ', max_hour_calendar))\n    )\n\n    SELECT slot_start, slot_end\n    FROM available_slots\n    WHERE NOT EXISTS (\n        SELECT 1\n        FROM turnos AS T\n        WHERE T.barber_id = ").concat(idBarber, "\n        AND (T.start_date < slot_end AND T.end_date > slot_start)\n    )\n    ORDER BY slot_start;"));
        case 10:
          _yield$connection$que17 = _context9.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          result = _yield$connection$que18[0];
          res.json({
            rta: 1,
            data: result
          });
          _context9.next = 20;
          break;
        case 16:
          _context9.prev = 16;
          _context9.t0 = _context9["catch"](0);
          res.status(500);
          res.json({
            rta: -1,
            message: "Ocurrio un error." + _context9.t0
          });
        case 20:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 16]]);
  }));
  return function turnsDayAvailable(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.ETHEREAL_USER,
    pass: process.env.ETHEREAL_PASS
  }
});
var sendEmailForClient = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body7, dataComplete, dataFormClient, dataBarber, selectedService, formattedDate, mailOptions;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          console.log("req", req);
          try {
            _req$body7 = req.body, dataComplete = _req$body7.dataComplete, dataFormClient = _req$body7.dataFormClient, dataBarber = _req$body7.dataBarber, selectedService = _req$body7.selectedService;
            formattedDate = (0, _moment["default"])(dataComplete.start_date).format("DD/MM/YYYY HH:mm");
            console.log("req.body", req.body);
            mailOptions = {
              from: process.env.ETHEREAL_USER,
              to: dataFormClient.email,
              subject: "Confirmación de Turno",
              html: "\n      <div style=\"font-family: Arial, sans-serif; color: #333; line-height: 1.6;\">\n        <h2 style=\"color: #000;\">Confirmaci\xF3n de Turno</h2>\n        <p>Hola nombre,</p>\n        <p>\xA1Gracias por reservar un turno con nosotros! Aqu\xED tienes los detalles de tu cita:</p>\n        <ul style=\"list-style-type: none; padding: 0;\">\n          <li><strong>Barbero seleccionado:</strong> ".concat(dataBarber.firstName, " ").concat(dataBarber.lastName, "</li>\n          <li><strong>Fecha y hora:</strong> ").concat(formattedDate, "</li>\n          <li><strong>Servicio seleccionado:</strong> ").concat(selectedService.name_service, "</li>\n          <li><strong>Valor del servicio:</strong> ").concat(dataComplete.price, "</li>\n        </ul>\n        <p>Si necesitas cambiar o cancelar tu turno, no dudes en ponerte en contacto con nosotros.</p>\n        <p><strong>Recuerda:</strong> Es importante llegar al menos 10 minutos antes de la hora programada.</p>\n        <p>\xA1Te esperamos!</p>\n        <p>Saludos cordiales</p>\n      </div>\n    ")
            };
            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.error("Error al enviar el correo:", error);
                return res.status(500).json({
                  rta: -1,
                  message: "Error al enviar el correo: " + error.message
                });
              }
              return res.status(200).json({
                rta: 1,
                message: "Correo de confirmación enviado."
              });
            });
          } catch (err) {
            res.status(500);
            res.json({
              rta: -1,
              message: "Ocurrio un error." + err
            });
          }
        case 2:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function sendEmailForClient(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var turnsController = exports.turnsController = {
  getTurns: getTurns,
  addTurn: addTurn,
  updateTurn: updateTurn,
  deleteTurn: deleteTurn,
  availableNextTurn: availableNextTurn,
  availableDate: availableDate,
  searchTurnsProfits: searchTurnsProfits,
  availableHoursOnSave: availableHoursOnSave,
  turnsDayAvailable: turnsDayAvailable,
  sendEmailForClient: sendEmailForClient
};