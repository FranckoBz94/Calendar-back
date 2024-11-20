import { Router } from "express";
import { usersController } from "../controllers/usersController.js";
import multer from "multer";
const router = Router();

//multer para subir imagenes
// var upload = multer({ dest: "uploads/" });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp"); // Usar directorio temporal en Vercel
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
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
