import { Router } from "express";
import UserController from "../../controller/User.controller";

const router = Router();

router.get("/all", UserController.allUsers);
router.post("/create", UserController.createUsers);
router.post("/update", UserController.updateUsers);
router.post("/delete", UserController.deleteUsers);

export default router;
