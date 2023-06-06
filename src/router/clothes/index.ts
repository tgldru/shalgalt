import { Router } from "express";
import clothesController from "../../controller/Huwtsas.controller";
import { authenticateToken } from "../../authenticateToken";
const router = Router();

router.get("/all",authenticateToken ,clothesController.allclothes);
router.post("/create", clothesController.createclothes);
router.post("/update", clothesController.updateclothes);
router.post("/delete", clothesController.deleteclothes);

export default router;
