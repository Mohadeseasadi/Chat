import { HandlerError } from "@rocket/exceptions/handler-error.class";
import { IUser } from "@rocket/interfaces/user/user.interface";
import User from "@rocket/models/user.model";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

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

        return res.status(200).json({ user: user.toJSON() as IUser });

    } catch (err) {
        next(err);
    }
};

export default getMeUserHandler;
