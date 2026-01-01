import { json } from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import ChatRoomConnectDB from "./base/database.base";
import ChatRoomResponse from "./base/response.base";
import ChatRoomRoutes from "./base/routes.base";
import router from "./routers/app.routes";
import ChatRoomErrorHandling from "./base/error.base";

dotenv.config();
const app = express();

// test git user

app.use(express.json({ limit: "10mb" }));
app.use(json());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
// connect to database
ChatRoomConnectDB();
// customize Response
ChatRoomResponse(app);
// initialize routes
ChatRoomRoutes(app, router);
// error handling
ChatRoomErrorHandling(app);

export default app;
