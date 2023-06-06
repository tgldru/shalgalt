import { Router } from "express";
import MovieController from "../../controller/movie.controller";

const router = Router();

router.get("/all", MovieController.allMovie);
router.post("/create", MovieController.createMovie);
router.post("/update", MovieController.updateMovie);
router.post("/delete", MovieController.deleteMovie);

export default router;
