"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ChatRoomDisconnectDB = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const ChatRoomConnectDB = async () => {
    const mongoUrl = process.env.DB;
    await mongoose_1.default.connect(mongoUrl);
    console.log(`Chat-Room is connecting to database`);
};
exports.default = ChatRoomConnectDB;
const ChatRoomDisconnectDB = async () => {
    mongoose_1.default.connection.close();
};
exports.ChatRoomDisconnectDB = ChatRoomDisconnectDB;
process.on("exit", async function () {
    await ChatRoomDisconnectDB();
});
