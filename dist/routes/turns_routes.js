"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _turnsController = require("../controllers/turnsController");
var router = (0, _express.Router)();
router.get("/:id", _turnsController.turnsController.getTurns);
router.post("/", _turnsController.turnsController.addTurn);
router.put("/:id", _turnsController.turnsController.updateTurn);
router["delete"]("/:id", _turnsController.turnsController.deleteTurn);
router.post("/availableTurn", _turnsController.turnsController.availableNextTurn);
router.post("/availableHoursOnSave", _turnsController.turnsController.availableHoursOnSave);
router.post("/availableDate", _turnsController.turnsController.availableDate);
router.post("/searchTurnsProfits", _turnsController.turnsController.searchTurnsProfits);
router.post("/turnsDayAvailable", _turnsController.turnsController.turnsDayAvailable);
router.post("/sendEmailForClient", _turnsController.turnsController.sendEmailForClient);
var _default = exports["default"] = router;