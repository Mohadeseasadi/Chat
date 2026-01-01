// src/socket/events.ts
import { getIO } from "./index";
import { socketAuthMiddleware } from "./middleware/auth.middleware";

export const registerSocketEvents = () => {
  const io = getIO();

  io.use(socketAuthMiddleware);

  io.on("connection", (socket) => {
    console.log("🟢 socket connected:", socket.user.username);

    socket.on("disconnect", () => {
      console.log("🔴 socket disconnected:", socket.user.username);
    });
  });
};
