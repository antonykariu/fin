import { Request, Response, NextFunction } from "express";
import { connect } from "mongoose";
import User from "../models/User";

export const users = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // FIXME change to have error handling
  const uri: any = process.env.URI;
  console.log(uri);

  // await connect(uri); // * Connect to mongodb
  //! CREATE USER
  // const user = new User({ name: "antony", email: "antonykaranja3@gmail.com" });
  // await user.save();

  // res.status(201).json({ message: "User created successfully" });

  //! READ USERS
  // const names: any[] = [];
  //   const users = await User.find().then((result) => {
  //     result.forEach((user) => {
  //       names.push(user.name);
  //     });
  //   });

  //   res.status(200).json({ names });
  next();
};