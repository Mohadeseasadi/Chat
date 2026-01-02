import { json } from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import path from "path";
import ChatRoomConnectDB from "./base/database.base";
import ChatRoomErrorHandling from "./base/error.base";
import ChatRoomResponse from "./base/response.base";
import ChatRoomRoutes from "./base/routes.base";
import router from "./routers/app.routes";
import viewRouter from "./routers/view.routes";

dotenv.config();
const app = express();

// config
app.use(express.json({ limit: "10mb" }));
app.use(json());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// use template engin
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", viewRouter);

// connect to database
ChatRoomConnectDB();
// customize Response
ChatRoomResponse(app);
// initialize routes
ChatRoomRoutes(app, router);
// error handling
ChatRoomErrorHandling(app);

export default app;
