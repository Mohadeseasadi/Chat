import { HandlerError } from "@chat/exceptions/handler-error.class";
import User from "@chat/models/user.model";
import { NextFunction, Request, Response } from "express";

const searchUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const username = req.query.username as string;
    if (!username) {
      throw new HandlerError("Please enter username");
    }

    const user = await User.find({
      username: { $regex: username, $options: "i" },
    })
      .limit(10)
      .select("username avatar bio");

    if (!user || user.length <= 0) {
      throw new HandlerError("User not found");
    }

    return res.sendResponse(user);
  } catch (err) {
    next(err);
  }
};

export default searchUserHandler;
