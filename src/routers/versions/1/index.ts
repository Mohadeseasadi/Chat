import { Router } from "express";
import applicationRouter from "./application.routes";
import imageRouter from "./image.routes";
import messageRouter from "./message.routes";
import roomRouter from "./room.routes";
import userRouter from "./user.routes";

const router = Router();

router
  .use("/application", applicationRouter)
  .use("/user", userRouter)
  .use("/image", imageRouter)
  .use("/room", roomRouter)
  .use("/message", messageRouter);

export default router;
