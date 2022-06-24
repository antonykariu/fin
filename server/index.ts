import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import http from "http";
import "express-async-errors";
import { createHttpTerminator } from "http-terminator";
import { errorHandler } from "./errors/ErrorHandler";
import "./process";

//? Routes
import userRouter from './routes/user.routes'

// // TODO add Error handling
// // TODO add controllers
// TODO add spend Feature
// TODO add logging
// TODO add session management

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 5000;
export const server = http.createServer(app);
export const httpTerminator = createHttpTerminator({ server });

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello" });
});

app.use("/user", userRouter);

//! Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Log error here
  // logger.logError(err)
  next(err);
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Send message to self
  // messenger.sendErrorMessage(err)
  next(err);
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Log error here
  errorHandler.handleError(err, res);
});

app.listen(port, () => {
  console.log(`⚡️[server]: is running on port ${port}`);
});
