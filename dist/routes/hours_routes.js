"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _hoursController = require("../controllers/hoursController");
var router = (0, _express.Router)();
router.get("/", _hoursController.hoursController.getHours);
router.get("/days", _hoursController.hoursController.getDays);
router.put("/:id", _hoursController.hoursController.updateHours);
router.post("/update-days", _hoursController.hoursController.updateDays);
var _default = exports["default"] = router;