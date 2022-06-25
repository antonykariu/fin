import { Request, Response, NextFunction } from "express";
import { connect } from "mongoose";
import Spend from "../models/Spend";

/**
 * This function creates a spend on the Database
 * @param req has params object of type Spend i.e {title,date,amount,category,?source}
 * @param res status 201 created successfully
 * @param next parses errors to error handlers
 */
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const uri: any = process.env.URI;

  await connect(uri)
    .then(() => {
      const params = {
        title: req.query.title,
        date: req.query.date,
        amount: req.query.amount,
        category: req.query.category,
      };
      const spend = new Spend(params);

      spend.save();
    })
    .catch((error) => {
      next(error);
    })
    .finally(() => {
      res.status(201).json({ message: "Spend created successfully" });
    });
};
