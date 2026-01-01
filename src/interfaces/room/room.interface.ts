import { Types } from "mongoose";

export interface IRoom extends Document {
  name: string;
  isPrivate: boolean;
  members: Types.ObjectId[];
  createdBy: Types.ObjectId;
}
