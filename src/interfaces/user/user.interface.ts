import { Gender } from "@rocket/enum/gender,enum";

export interface IUser extends Document {
  firstName?: string;
  lastName?: string;
  username: string;
  password: string;
  age?: number;
  gender?: Gender;
  bio?: string;
  avatar?: string;
}
