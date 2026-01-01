import { HandlerError } from "@chat/exceptions/handler-error.class";
import User from "@chat/models/user.model";
import { NextFunction, Request, Response } from "express";

const getUserListHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    if (users.length <= 0) {
      throw new HandlerError("User not found");
    }

    return res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

export default getUserListHandler;
