import { HandlerError } from "@chat/exceptions/handler-error.class";
import User from "@chat/models/user.model";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const loginUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new HandlerError("username and password is required");
    }

    const user = await User.findOne({ username }).select("+password");
    if (!user) {
      throw new HandlerError("this username not exist !");
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    return res.sendResponse({
      userId: user.id,
      username: user.username,
      token,
    });
  } catch (err) {
    next(err);
  }
};

export default loginUserHandler;
