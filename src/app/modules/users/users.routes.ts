import express, { Router } from "express";
import { UserController } from "./users.controller";

const router: Router = express.Router();

router.post("/", UserController.createUser);

export const userRouter = router;
