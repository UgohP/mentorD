import { Router } from "express";
const userRouter = Router();

userRouter.get("", (req, res) => {
  res.send({ title: "Gets all the Users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "GETS a particular user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATES a User" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETES a User" });
});

export default userRouter;
