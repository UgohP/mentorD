import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "User last name is required"],
      trim: true,
      minLength: 2,
      maxLength: 30,
    },
    lastName: {
      type: String,
      required: [true, "User first name is required"],
      trim: true,
      minLength: 2,
      maxLength: 30,
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "User password is required"],
      minLength: 8,
    },
    role: {
      type: String,
      required: [true, "User role is required"],
      enum: ["Mentor", "Mentee"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
