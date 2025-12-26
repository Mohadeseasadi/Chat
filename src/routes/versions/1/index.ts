import { Router } from "express";
import applicationRouter from "./application.routes";

const router = Router();

router.use("/application", applicationRouter);

export default router;
