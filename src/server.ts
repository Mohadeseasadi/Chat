import http from "http";
import app from "./app";
import { initSocket } from "./socket";
import { registerSocketEvents } from "./socket/events";

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

initSocket(server);
registerSocketEvents();

server.listen(PORT, () => {
  console.log(`Chat-Room run on port ${PORT}`);
});
