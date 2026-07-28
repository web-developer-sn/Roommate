import mongoose, { Schema, Model, models } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;

  otp?: string | null;

  otpExpiry?: Date | null;

  emailVerified: boolean;

  role: "USER" | "HOST" | "ADMIN";

  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
    type: String
},

otpExpiry: {
    type: Date,
},

    role: {
      type: String,
      enum: ["USER", "HOST", "ADMIN"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
  
);

const User: Model<IUser> =
  models.User || mongoose.model<IUser>("User", userSchema);

export default User;