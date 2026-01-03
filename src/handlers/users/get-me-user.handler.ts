import { HandlerError } from "@chat/exceptions/handler-error.class";
import User from "@chat/models/user.model";
import { NextFunction, Request, Response } from "express";

const getMeUserHandler = async (
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

    return res.sendResponse(user);
  } catch (err) {
    next(err);
  }
};

export default getMeUserHandler;
