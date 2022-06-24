import "express-async-errors";
import { Router, Request, Response, NextFunction } from "express";
import { errorHandler } from "../errors/ErrorHandler";
// import { AppError, HttpCode } from '../errors/AppError';
import { connect } from "mongoose";

import User from "../models/User";
const router = Router();

router.get("/users", async (req: Request, res: Response) => {
  // FIXME change to have error handling
  const uri: any = process.env.URI;
  console.log(uri);

//   await connect(uri); // * Connect to mongodb
  //! CREATE USER
  //   const user = new User({ name: "antony", email: "kariuantony@gmail.com" });
  //   await user.save();

  //! READ USERS
//   const names: any[] = [];
//   const users = await User.find().then((result) => {
//     result.forEach((user) => {
//       names.push(user.name);
//     });
//   });

//   res.status(200).json({ names });
});
20;
//! Error handling
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Log error here
  // logger.logError(err)
  next(err);
});
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Send message to self
  // messenger.sendErrorMessage(err)
  next(err);
});
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Log error here
  errorHandler.handleError(err, res);
});

export default router;
