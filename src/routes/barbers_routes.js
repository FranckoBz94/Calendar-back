import { Router } from "express";
import { barbersController } from "../controllers/barbersController.js";
import multer from "multer";
const router = Router();

var upload = multer({ dest: "uploads/imageBarbers/" });

router.get("/", barbersController.getBarbers);
router.post("/", upload.single("imageProfile"), barbersController.addBarber);
router.put(
  "/:id",
  upload.single("imageProfile"),
  barbersController.updateBarber
);
router.delete("/:id", barbersController.deleteBarber);

export default router;
