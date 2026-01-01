// models/message.model.ts
import { IMessage } from "@chat/interfaces/message/message.interface";
import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema<IMessage>(
  {
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IMessage>("Message", MessageSchema);
