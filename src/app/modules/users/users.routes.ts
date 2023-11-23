import express, { Router } from "express";
import { UserController } from "./users.controller";

const router: Router = express.Router();

router
   .route("/:userId")
   .get(UserController.getSingleUser)
   .delete(UserController.deleteUserById);

router
   .route("/")
   .get(UserController.getAllUsers)
   .post(UserController.createUser);

export const userRouter = router;
