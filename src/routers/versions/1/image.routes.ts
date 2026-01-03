import { upload } from "@chat/config/multer.config";
import getIMageHandler from "@chat/handlers/images/get-image.handler";
import uploadIMageHandler from "@chat/handlers/images/upload-image.handler";
import JWT from "@chat/middlewares/jwt.middleware";
import { Router } from "express";

const imageRouter = Router();

imageRouter.post(
  "/upload",
  upload.single("avatar"),
  JWT.Login,
  uploadIMageHandler
);

imageRouter.get("/get", getIMageHandler);

export default imageRouter;
