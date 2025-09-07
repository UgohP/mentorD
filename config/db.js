import mongoose from "mongoose";
import { JWT_SECRET, MONGODB_URI } from "./env.js";

if (!MONGODB_URI) {
  throw new Error(
    "Define the MONGODB_URI inside your .env<development.production>.local file"
  );
}

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined");
}

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGODB_URI);
    console.log(`Database Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("Error connecting database", error);
    process.exit(1);
  }
};

export default connectDB;
