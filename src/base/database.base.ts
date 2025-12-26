import mongoose from "mongoose";

const ChatRoomConnectDB = async () => {
  const mongoUrl = process.env.DB as string;
  await mongoose.connect(mongoUrl);
  console.log(`Chat-Room is connecting to database`);
};

const ChatRoomDisconnectDB = async () => {
  mongoose.connection.close();
};

process.on("exit", async function () {
  await ChatRoomDisconnectDB();
});

export { ChatRoomDisconnectDB, ChatRoomConnectDB as default };
