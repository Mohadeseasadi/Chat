import createRoomHandler from "@chat/handlers/rooms/create-room.handler";
import { getMyRoomsHandler } from "@chat/handlers/rooms/get-my-room.handler";
import { joinRoomHandler } from "@chat/handlers/rooms/join-room.handler";
import JWT from "@chat/middlewares/jwt.middleware";
import { Router } from "express";

const roomRouter = Router();

roomRouter.post("/create", JWT.Login, createRoomHandler);

roomRouter.get("/my-list", JWT.Login, getMyRoomsHandler);

roomRouter.post("/join-room", JWT.Login, joinRoomHandler);

export default roomRouter;
