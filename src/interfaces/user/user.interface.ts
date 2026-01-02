import { Gender } from "@chat/enum/gender.enum";
import { UserRole } from "@chat/enum/user-role.enum";

export interface IUser extends Document {
  firstName?: string;
  lastName?: string;
  username: string;
  password: string;
  age?: number;
  gender?: Gender;
  role?: UserRole;
  bio?: string;
  avatar?: string;
  comparePassword(candidate: string): Promise<boolean>;
}
