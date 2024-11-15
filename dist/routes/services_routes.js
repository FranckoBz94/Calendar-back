"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _servicesController = require("../controllers/servicesController");
var router = (0, _express.Router)();
router.get("/", _servicesController.servicesController.getServices);
router.post("/", _servicesController.servicesController.addService);
router.put("/:id", _servicesController.servicesController.updateService);
router["delete"]("/:id", _servicesController.servicesController.deleteService);
var _default = exports["default"] = router;