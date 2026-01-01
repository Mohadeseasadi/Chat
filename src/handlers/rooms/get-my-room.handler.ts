import { HandlerError } from "@chat/exceptions/handler-error.class";
import User from "@chat/models/user.model";
import Room from "@models/room.model";
import { NextFunction, Request, Response } from "express";

export const getMyRoomsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const username = req.currentUser.username;
    const user = await User.findOne({ username });
    if (!user) {
      throw new HandlerError("User not found");
    }

    const rooms = await Room.find({
      members: user.id,
    })
      .select("name isPrivate createdAt")
      .sort({ createdAt: -1 });

    res.sendResponse(rooms);
  } catch (err) {
    next(err);
  }
};
