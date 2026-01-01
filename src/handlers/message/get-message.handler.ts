// handlers/get-messages.handler.ts
import Message from "@models/message.model";
import { NextFunction, Request, Response } from "express";

export const getMessagesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { roomId } = req.query;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const messages = await Message.find({ room: roomId })
      .populate("sender", "username avatar")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.sendResponse({
      page,
      limit,
      messages: messages.reverse(),
    });
  } catch (err) {
    next(err);
  }
};
