import { Request, Response, NextFunction, Router } from "express";
import UserRouter from "./user";
import ActorRouter from "./actor";
import CastsRouter from "./casts";
import DirectorRouter from "./director";
import MovieRouter from "./movie";
import StudioRouter from "./studio";
import Login from "../controller/Login.controller"

const router = Router();

router.get("/health", (req, res) => {
  res.json({
    status: "success",
    status_code: 0,
    message: "API is running",
  });
});
router.post("/login", Login.token);
router.use("/user", UserRouter);
router.use("/actor", ActorRouter);
router.use("/casts", CastsRouter);
router.use("/director", DirectorRouter);
router.use("/movie", MovieRouter);
router.use("/Studio", StudioRouter);

export default router;

