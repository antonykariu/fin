import express, { Router } from 'express'
import {users} from '../controllers/UserController' 


const userRouter = Router()

userRouter.get('/create', users)

export default userRouter;