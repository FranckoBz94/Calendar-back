import { Router } from "express";
import { hoursController } from "../controllers/hoursController";
const router = Router();

router.get("/", hoursController.getHours);
router.get("/days", hoursController.getDays);
router.put("/:id", hoursController.updateHours);
router.post("/update-days", hoursController.updateDays);

export default router;
