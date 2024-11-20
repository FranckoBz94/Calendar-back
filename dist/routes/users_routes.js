"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _express = require("express");
var _usersController = require("../controllers/usersController");
var router = (0, _express.Router)();

//multer para subir imagenes
// var upload = multer({
//   dest: "uploads/",
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
router.post("/login", _usersController.usersController.login);
router.get("/", _usersController.usersController.getUsers);
router.post(
  "/dataGraphics",
  _usersController.usersController.getDataGraphicsUser
);
router.post(
  "/countTurnsGraphics",
  _usersController.usersController.getDataTurnsGraphics
);
router.post(
  "/getTurnsDayWeek",
  _usersController.usersController.getTurnsDayWeek
);
router.get("/myprofile/:id", _usersController.usersController.getUserLogged);
router.post(
  "/",
  upload.single("imageProfile"),
  _usersController.usersController.addUser
);
router.put(
  "/:id",
  upload.single("imageProfile"),
  _usersController.usersController.updateUser
);
router.put(
  "/updateStateBarber/:id",
  _usersController.usersController.updateStateUser
);
router["delete"]("/:id", _usersController.usersController.deleteUser);

//forgotPasword
router.post(
  "/forgot-password",
  _usersController.usersController.forgotPassword
);
router.post("/reset-password", _usersController.usersController.resetPassword);
var _default = (exports["default"] = router);
