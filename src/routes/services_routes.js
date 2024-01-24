import { Router } from "express"
import { servicesController } from "../controllers/servicesController"
const router = Router()

router.get("/", servicesController.getServices)
router.post("/", servicesController.addService)
router.put("/:id", servicesController.updateService)
router.delete("/:id", servicesController.deleteService)

export default router
