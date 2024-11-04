import { Router } from "express";
import { usersController } from "../controllers/usersController";

const router = Router();

//multer para subir imagenes
const multer = require("multer");
var upload = multer({ dest: "uploads/" });

router.post("/login", usersController.login);
router.get("/", usersController.getUsers);
router.post("/dataGraphics", usersController.getDataGraphicsUser);
router.post("/countTurnsGraphics", usersController.getDataTurnsGraphics);
router.post("/getTurnsDayWeek", usersController.getTurnsDayWeek);

router.get("/myprofile/:id", usersController.getUserLogged);
router.post("/", upload.single("imageProfile"), usersController.addUser);
router.put("/:id", upload.single("imageProfile"), usersController.updateUser);
router.put("/updateStateBarber/:id", usersController.updateStateUser);
router.delete("/:id", usersController.deleteUser);

//forgotPasword
router.post("/forgot-password", usersController.forgotPassword);
router.post("/reset-password", usersController.resetPassword);

export default router;
