import { IRoom } from "@chat/interfaces/room/room.interface";
import mongoose, { Schema } from "mongoose";

const RoomSchema = new Schema<IRoom>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IRoom>("Room", RoomSchema);
