import { Gender } from "@rocket/enum/gender.enum";
import { UserRole } from "@rocket/enum/user-role.enum";
import { IUser } from "@rocket/interfaces/user/user.interface";
import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";

const UserSchema: Schema<IUser> = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    age: {
      type: Number,
      min: 0,
      max: 120,
    },
    gender: {
      type: String,
      enum: Gender,
    },
    role: {
      type: String,
      enum: UserRole,
      default: UserRole.USER,
    },
    bio: {
      type: String,
      maxlength: 500,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = async function (
  candidate: string
): Promise<boolean> {
  return bcrypt.compare(candidate, this.password);
};

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
