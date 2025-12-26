import { Router } from "express";
import applicationRouter from "./application.routes";
import userRouter from "./user.routes";

const router = Router();

router.use("/application", applicationRouter).use("/user", userRouter);

export default router;
