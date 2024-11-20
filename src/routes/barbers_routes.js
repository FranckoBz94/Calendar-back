import { Router } from "express";
import { barbersController } from "../controllers/barbersController.js";
import multer from "multer";
const router = Router();

// var upload = multer({ dest: "uploads/imageBarbers/" });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp"); // Usar directorio temporal en Vercel
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
router.get("/", barbersController.getBarbers);
router.post("/", upload.single("imageProfile"), barbersController.addBarber);
router.put(
  "/:id",
  upload.single("imageProfile"),
  barbersController.updateBarber
);
router.delete("/:id", barbersController.deleteBarber);

export default router;
