import express, { Router } from "express";
import { UserController } from "./users.controller";

const router: Router = express.Router();

router
  .route("/")
  .post(UserController.createUser)
  .get(UserController.getAllUsers);

export const userRouter = router;
