import { Router } from "express";
import { create } from "../controllers/SpendController";

const spendRouter = Router();

spendRouter.get("/create", create);

export default spendRouter;
