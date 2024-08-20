import { Router } from "express";
import { clientsController } from "../controllers/clientsController";
const router = Router();

router.get("/", clientsController.getClients);
router.post("/", clientsController.addClient);
router.post("/fetchClientData", clientsController.fetchClientData);
router.put("/:id", clientsController.updateClient);
router.delete("/:id", clientsController.deleteClient);

export default router;
