import { Types } from "mongoose";

export interface IMessage extends Document {
  room: Types.ObjectId;
  sender: Types.ObjectId;
  content: string;
}
