import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({ title: "Sign-up a User" });
});

authRouter.post("/sign-in", (req, res) => {
  res.send({ title: "Sign-in a User" });
});

authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "Sign-out a User" });
});

export default authRouter;
