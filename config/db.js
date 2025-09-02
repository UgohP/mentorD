import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";

if (!MONGODB_URI) {
  throw new Error(
    "Define the MONGODB_URI inside your .env<development.production>.local file"
  );
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
