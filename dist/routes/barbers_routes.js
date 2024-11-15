"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _barbersController = require("../controllers/barbersController");
var router = (0, _express.Router)();
var multer = require("multer");
var upload = multer({
  dest: "uploads/imageBarbers/"
});
router.get("/", _barbersController.barbersController.getBarbers);
router.post("/", upload.single("imageProfile"), _barbersController.barbersController.addBarber);
router.put("/:id", upload.single("imageProfile"), _barbersController.barbersController.updateBarber);
router["delete"]("/:id", _barbersController.barbersController.deleteBarber);
var _default = exports["default"] = router;