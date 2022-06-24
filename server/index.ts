import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";
import { createHttpTerminator } from "http-terminator";
import "./process";

//? Routes
import router from "./routes/routes";

// TODO add Error handling
// TODO add controllers
// TODO add session management

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 5000;
export const server = http.createServer(app);
export const httpTerminator = createHttpTerminator({ server });

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello" });
});

app.use("/", router);

app.listen(port, () => {
  console.log(`⚡️[server]: is running on port ${port}`);
});
