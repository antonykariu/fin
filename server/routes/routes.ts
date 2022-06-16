import { Router, Request, Response } from "express";
import User from "../models/User";
const router: Router = Router()

router.get("/users",async (req:Request, res:Response) => {
    const users = await User.find()
    res.send(users)
})

export default router