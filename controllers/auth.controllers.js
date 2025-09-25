import mongoose from "mongoose";

export const signup = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    console.log("try");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
