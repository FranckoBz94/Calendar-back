import { Router } from "express"
import { barbersController } from "../controllers/barbersController"
const router = Router()

router.get("/", barbersController.getBarbers)
router.post("/", barbersController.addBarber)
router.put("/:id", barbersController.updateBarber)
router.delete("/:id", barbersController.deleteBarber)

export default router
