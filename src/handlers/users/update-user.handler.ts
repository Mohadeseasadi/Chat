import { Gender } from "@chat/enum/gender.enum";
import { HandlerError } from "@chat/exceptions/handler-error.class";
import { IUser } from "@chat/interfaces/user/user.interface";
import User from "@chat/models/user.model";
import { MinioService } from "@chat/services/minio/minio.service";
import { NextFunction, Request, Response } from "express";

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

    if (!req.body && !req.file) {
      throw new HandlerError("No data provided to update");
    }

    const { firstName, lastName, password, age, gender, bio } = req.body;
    const avatar = req.file;

    if (avatar) {
      const minioService = new MinioService();
      const objectName = await minioService.uploadFile(
        avatar.buffer,
        avatar.originalname
      );
      user.avatar = objectName;
    }

    if (
      password !== undefined &&
      typeof password === "string" &&
      password.length < 6
    ) {
      throw new HandlerError("Password must be at least 6 characters");
    }

    let convetToNumberTypeAge: number;
    if (age !== undefined) {
      convetToNumberTypeAge = Number(age);
      if (age < 0 || age > 120) {
        throw new HandlerError("Age must be between 0 and 120");
      }
      user.age = convetToNumberTypeAge;
    }

    if (gender !== undefined) {
      const validGenders = Object.values(Gender);
      if (!validGenders.includes(gender)) {
        throw new HandlerError("Invalid gender value");
      }
    }

    if (bio !== undefined && typeof bio === "string" && bio.length > 500) {
      throw new HandlerError("Bio max length is 500");
    }

    if (firstName !== undefined) user.firstName = firstName;
    if (lastName !== undefined) user.lastName = lastName;
    if (gender !== undefined) user.gender = gender;
    if (bio !== undefined) user.bio = bio;
    if (password !== undefined) user.password = password;

    await user.save();

    return res.sendResponse({
      user: user.toJSON() as IUser,
    });
  } catch (err) {
    next(err);
  }
};

export default updateUserHandler;
