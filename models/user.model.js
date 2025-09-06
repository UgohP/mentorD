import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "User email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    password: {
      type: String,
      minLength: 8,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    role: {
      type: String,
      required: [true, "User role is required"],
      enum: ["Mentor", "Mentee"],
    },
    profile: {
      name: {
        type: String,
        required: [true, "Profile name is required"],
        trim: true,
      },
      bio: { type: String, maxlength: 500 },
      skills: [{ type: String, lowercase: true, trim: true }],
      experienceYears: { type: Number, min: 0 },
      location: { type: String, trim: true },
      menteeLimit: { type: Number, default: 5, min: 0 },
      preferences: { type: String, default: "" },
    },
    currentMentor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    currentMentees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("validate", function (next) {
  if (!this.password && !this.googleId) {
    return next(new Error("User must have either a password or google ID"));
  }
  next();
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

UserSchema.index({ role: 1 });
UserSchema.index({ "profile.skills": 1 });

const User = mongoose.model("User", UserSchema);
export default User;