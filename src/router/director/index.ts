import { Router } from "express";
import DirectorController from "../../controller/director.controller";

const router = Router();

router.get("/all", DirectorController.allDirector);
router.post("/create", DirectorController.createDirector);
router.post("/update", DirectorController.updateDirecter);
router.post("/delete", DirectorController.deleteDirector);

export default router;
