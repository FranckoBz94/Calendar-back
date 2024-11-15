"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _clientsController = require("../controllers/clientsController");
var router = (0, _express.Router)();
router.get("/", _clientsController.clientsController.getClients);
router.post("/", _clientsController.clientsController.addClient);
router.post("/fetchClientData", _clientsController.clientsController.fetchClientData);
router.put("/:id", _clientsController.clientsController.updateClient);
router["delete"]("/:id", _clientsController.clientsController.deleteClient);
var _default = exports["default"] = router;