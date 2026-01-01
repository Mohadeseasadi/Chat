import { Application } from "express";
import errorMiddleware from "../middlewares/error.middleware";
import mongooseErrorMiddleware from "../middlewares/mongoose.middleware";

const ChatRoomErrorHandling = (application: Application): void => {
  application.use(mongooseErrorMiddleware);
  application.use(errorMiddleware);
};

export default ChatRoomErrorHandling;
