import { Router } from "express";
import StudioController from "../../controller/Studio.controller";

const router = Router();

router.get("/all", StudioController.allStudio);
router.post("/create", StudioController.createStudio);
router.post("/update", StudioController.updateStudio);
router.post("/delete", StudioController.deleteStudio);

export default router;
