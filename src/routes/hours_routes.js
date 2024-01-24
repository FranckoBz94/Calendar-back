import { Router } from "express"
import { hoursController } from "../controllers/hoursController"
const router = Router()

router.get("/", hoursController.getHours)
router.put("/:id", hoursController.updateHours)

export default router
