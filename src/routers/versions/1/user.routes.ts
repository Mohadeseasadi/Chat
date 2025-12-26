import createUserHandler from "@rocket/handlers/users/create-users.handler";
import loginUserHandler from "@rocket/handlers/users/login-users.handler";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/register", createUserHandler);

userRouter.post("/login", loginUserHandler);

userRouter.patch("/update", loginUserHandler);

userRouter.get("/me", loginUserHandler);

userRouter.get("/list", loginUserHandler);

export default userRouter;
