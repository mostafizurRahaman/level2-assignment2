import express, { Application, Request, Response } from "express";
import cors from "cors";

// create an application:
const app: Application = express();

// use cors :
app.use(cors());
app.use(express.json());

// main route of my server :
app.get("/", (req: Request, res: Response) => {
  console.log("aaaaaaaaaaaaaa");

  console.log("aaaaaaaaaaaaaaaaa");

  res.status(200).send(`Yah!! My server is running now🤷‍♂️`);
});

// all routes use here:

export default app;
