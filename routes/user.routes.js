import { Router } from "express";
const userRouter = Router();

userRouter.get("", (req, res) => {
  res.send({ title: "Gets all the Users (ADMIN <filter by skills/location>)" });
});

userRouter.get("/mentors", (req, res) => {
  res.send({
    title:
      "GETS the list of mentors (PUBLIC <filter by skills, location, etc>)",
  });
});

userRouter.get("/me", (req, res) => {
  res.send({ title: "GETS logged in user profile <AUTHENTICATED>" });
});

userRouter.put("/me", (req, res) => {
  res.send({ title: "UPDATES logged in user profile <AUTHENTICATED>" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "GETS a particular user <PUBLIC>" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATES a User" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETES a User <ADMIN>" });
});

export default userRouter;