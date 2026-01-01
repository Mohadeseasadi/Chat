// handlers/send-message.handler.ts
import { HandlerError } from "@chat/exceptions/handler-error.class";
import User from "@chat/models/user.model";
import Message from "@models/message.model";
import Room from "@models/room.model";
import { NextFunction, Request, Response } from "express";

export const sendMessageHandler = async (
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
    const { roomId } = req.query;
    const { content } = req.body;

    const room = await Room.findById(roomId);
    if (!room || !room.members.includes(user.id)) {
      throw new HandlerError("Access denied");
    }

    const message = await Message.create({
      room: roomId,
      sender: user.id,
      content,
    });

    res.sendResponse({ message });
  } catch (err) {
    next(err);
  }
};
