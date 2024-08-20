import { Router } from "express";
import { turnsController } from "../controllers/turnsController";
const router = Router();

router.get("/:id", turnsController.getTurns);
router.post("/", turnsController.addTurn);
router.put("/:id", turnsController.updateTurn);
router.delete("/:id", turnsController.deleteTurn);
router.post("/availableTurn", turnsController.availableNextTurn);
router.post("/availableHoursOnSave", turnsController.availableHoursOnSave);
router.post("/availableDate", turnsController.availableDate);
router.post("/searchTurnsProfits", turnsController.searchTurnsProfits);
router.post("/turnsDayAvailable", turnsController.turnsDayAvailable);

export default router;
