"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SpendController_1 = require("../controllers/SpendController");
const spendRouter = (0, express_1.Router)();
spendRouter.get("/create", SpendController_1.create);
exports.default = spendRouter;
