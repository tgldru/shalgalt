import { Router } from "express";
import PostController from "../../controller/casts.controller";

const router = Router();

router.get("/all", PostController.allCasts);
router.post("/create", PostController.createCasts);
router.post("/update", PostController.updateCasts);
router.post("/delete", PostController.deleteCasts);

export default router;
