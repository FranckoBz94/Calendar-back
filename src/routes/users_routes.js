import { Router } from "express"
import { usersController } from "../controllers/usersController"

const router = Router()

//multer para subir imagenes
const multer = require("multer")
var upload = multer({ dest: "uploads/" })

router.get("/", usersController.getUsers)
router.post("/", upload.single("imageProfile"), usersController.addUser)
router.put("/:id", upload.single("imageProfile"), usersController.updateUser)
router.delete("/:id", usersController.deleteUser)

export default router
