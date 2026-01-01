import { getMessagesHandler } from "@chat/handlers/message/get-message.handler";
import { sendMessageHandler } from "@chat/handlers/message/send-meesage.handler";
import JWT from "@chat/middlewares/jwt.middleware";
import { Router } from "express";

const messageRouter = Router();

messageRouter.post("/send", JWT.Login, sendMessageHandler);

messageRouter.get("/get", JWT.Login, getMessagesHandler);

export default messageRouter;
