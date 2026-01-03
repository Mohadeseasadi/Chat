import { UserRole } from "@chat/enum/user-role.enum";
import createUserHandler from "@chat/handlers/users/create-users.handler";
import getMeUserHandler from "@chat/handlers/users/get-me-user.handler";
import getUserListHandler from "@chat/handlers/users/get-users-list.handler";
import loginUserHandler from "@chat/handlers/users/login-users.handler";
import searchUserHandler from "@chat/handlers/users/search-user.handler";
import updateUserHandler from "@chat/handlers/users/update-user.handler";
import JWT from "@chat/middlewares/jwt.middleware";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/register", createUserHandler);

userRouter.post("/login", loginUserHandler);

userRouter.patch("/update", JWT.Login, updateUserHandler);

userRouter.get("/me", JWT.Login, getMeUserHandler);

userRouter.get("/list", JWT.hasRole([UserRole.ADMIN]), getUserListHandler);

userRouter.get("/search", searchUserHandler);

export default userRouter;
