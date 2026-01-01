import { HandlerError } from "@chat/exceptions/handler-error.class";
import User from "@chat/models/user.model";
import Room from "@models/room.model";
import { NextFunction, Request, Response } from "express";

export const joinRoomHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const username = req.currentUser.username;
    const { roomId } = req.query;

    const user = await User.findOne({ username });
    if (!user) {
      throw new HandlerError("User not found");
    }

    const room = await Room.findById(roomId);

    if (!room) {
      throw new HandlerError("Room not found");
    }

    if (room.members.includes(user.id)) {
      throw new HandlerError("Already joined");
    }

    room.members.push(user.id);
    await room.save();

    res.sendResponse(room);
  } catch (err) {
    next(err);
  }
};
