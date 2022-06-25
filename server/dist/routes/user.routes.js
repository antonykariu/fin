"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userRouter = (0, express_1.Router)();
userRouter.get("/create", UserController_1.users);
exports.default = userRouter;
