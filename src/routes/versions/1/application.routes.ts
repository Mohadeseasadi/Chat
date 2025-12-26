import { Router } from "express";
import applicationInformationHandler from "../../../handlers/application/info.handler";

const applicationRouter = Router();

applicationRouter.get("/info", applicationInformationHandler);

export default applicationRouter;
