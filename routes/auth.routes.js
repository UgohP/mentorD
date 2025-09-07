import { Router } from "express";

const authRouter = Router();

authRouter.post("/signup", (req, res) => {
  res.send({ title: "Sign-up a User" });
});

authRouter.post("/login", (req, res) => {
  res.send({ title: "Sign-in a User" });
});

authRouter.post("/logout", (req, res) => {
  res.send({ title: "Sign-out a User" });
});

authRouter.get("/google", (req, res) => {
  res.send({ title: "GETS the google login" });
});

authRouter.get("/google/callback", (req, res) => {
  res.send({ title: "GETS the google OAuth callback" });
});

export default authRouter;
