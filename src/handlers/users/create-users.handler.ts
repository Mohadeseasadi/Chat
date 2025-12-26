import { HandlerError } from "@rocket/exceptions/handler-error.class";
import User from "@rocket/models/user.model";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new HandlerError("username and password is required");
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new HandlerError("this username exist !");
    }

    const user = await User.create({
      username,
      password,
    });

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

export default createUserHandler;
