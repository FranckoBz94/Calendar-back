import { Router } from "express"
import { barbersController } from "../controllers/barbersController"
const router = Router()

const multer = require("multer")
var upload = multer({ dest: "uploads/imageBarbers/" })

router.get("/", barbersController.getBarbers)
router.post("/", upload.single("imageProfile"), barbersController.addBarber)
router.put("/:id", upload.single("imageProfile"), barbersController.updateBarber)
router.delete("/:id", barbersController.deleteBarber)

export default router
