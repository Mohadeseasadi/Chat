import jwt from "jsonwebtoken";
import { ExtendedError, Socket } from "socket.io";

export const socketAuthMiddleware = (
  socket: Socket,
  next: (err?: ExtendedError) => void
) => {
  try {
    const token =
      socket.handshake.auth?.token ||
      socket.handshake.headers?.authorization?.split(" ")[1];

    if (!token) {
      return next(new Error("Unauthorized"));
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    socket.user = payload;

    next();
  } catch (err) {
    next(new Error("Unauthorized"));
  }
};
