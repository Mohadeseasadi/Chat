import { Gender } from "@rocket/enum/gender,enum";
import { HandlerError } from "@rocket/exceptions/handler-error.class";
import { IUser } from "@rocket/interfaces/user/user.interface";
import User from "@rocket/models/user.model";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const updateUserHandler = async (
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

        const { firstName, lastName, password, age, gender, bio, avatar, } = req.body;

        if (password !== undefined && typeof password === "string" && password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        if (age !== undefined && (typeof age !== "number" || age < 0 || age > 120)) {
            return res.status(400).json({ message: "Age must be between 0 and 120" });
        }

        if (gender !== undefined) {
            const validGenders = Object.values(Gender);
            if (!validGenders.includes(gender)) {
                return res.status(400).json({ message: "Invalid gender value" });
            }
        }

        if (bio !== undefined && typeof bio === "string" && bio.length > 500) {
            return res.status(400).json({ message: "Bio max length is 500" });
        }

        if (firstName !== undefined) user.firstName = firstName;
        if (lastName !== undefined) user.lastName = lastName;
        if (age !== undefined) user.age = age;
        if (gender !== undefined) user.gender = gender;
        if (bio !== undefined) user.bio = bio;
        if (avatar !== undefined) user.avatar = avatar;

        if (password !== undefined) user.password = password;

        await user.save();


        return res.status(200).json({
            message: "User updated successfully",
            user: user.toJSON() as IUser,
        });

    } catch (err) {
        next(err);
    }
};

export default updateUserHandler;