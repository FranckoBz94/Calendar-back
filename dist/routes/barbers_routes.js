"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _express = require("express");
var _barbersController = require("../controllers/barbersController");
var router = (0, _express.Router)();
// var upload = multer({
//   dest: "uploads/imageBarbers/"
// });
var multer = require("multer");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp"); // Usar directorio temporal en Vercel
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
var upload = multer({ storage: storage });
router.get("/", _barbersController.barbersController.getBarbers);
router.post(
  "/",
  upload.single("imageProfile"),
  _barbersController.barbersController.addBarber
);
router.put(
  "/:id",
  upload.single("imageProfile"),
  _barbersController.barbersController.updateBarber
);
router["delete"]("/:id", _barbersController.barbersController.deleteBarber);
var _default = (exports["default"] = router);
