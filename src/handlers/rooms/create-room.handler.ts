import { HandlerError } from "@chat/exceptions/handler-error.class";
import User from "@chat/models/user.model";
import Room from "@models/room.model";
import { NextFunction, Request, Response } from "express";

const createRoomHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const username = req.currentUser.username;
    const { name, isPrivate } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      throw new HandlerError("User not found");
    }

    const room = await Room.create({
      name,
      isPrivate,
      createdBy: user.id,
      members: [user.id],
    });

    res.sendResponse(room);
  } catch (err) {
    next(err);
  }
};

export default createRoomHandler;
