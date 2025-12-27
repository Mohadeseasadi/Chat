import createUserHandler from "@rocket/handlers/users/create-users.handler";
import getMeUserHandler from "@rocket/handlers/users/get-me-user.handler";
import getUserListHandler from "@rocket/handlers/users/get-users-list.handler";
import loginUserHandler from "@rocket/handlers/users/login-users.handler";
import updateUserHandler from "@rocket/handlers/users/update-user.handler";
import JWT from "@rocket/middlewares/jwt.middleware";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/register", createUserHandler);

userRouter.post("/login", loginUserHandler);

userRouter.patch("/update", JWT.Login, updateUserHandler);

userRouter.get("/me", JWT.Login, getMeUserHandler);

userRouter.get("/list", getUserListHandler);

export default userRouter;
