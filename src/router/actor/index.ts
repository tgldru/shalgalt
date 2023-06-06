import { Router } from "express";
import PostController from "../../controller/actor.controller";

const router = Router();

router.get("/all", PostController.allactor);
router.post("/create", PostController.createActors);
router.post("/update", PostController.updateActors);
router.post("/delete", PostController.deleteActors);

export default router;
