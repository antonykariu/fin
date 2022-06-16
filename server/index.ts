import express, { Express, Request, Response } from "express";
import {connect} from "mongoose";
import dotenv from "dotenv";
import router from "./routes/routes";


dotenv.config();
const app: Express = express();
const port: any = process.env.PORT;
const uri: any = process.env.URI;

connect(uri) // * Connect to mongodb 

// TODO configure kubernetes

app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port} or is it`);
});

