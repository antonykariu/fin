"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = require("express");
const ErrorHandler_1 = require("../errors/ErrorHandler");
const router = (0, express_1.Router)();
router.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // FIXME change to have error handling
    const uri = process.env.URI;
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
}));
20;
//! Error handling
router.use((err, req, res, next) => {
    // Log error here
    // logger.logError(err)
    next(err);
});
router.use((err, req, res, next) => {
    // Send message to self
    // messenger.sendErrorMessage(err)
    next(err);
});
router.use((err, req, res, next) => {
    // Log error here
    ErrorHandler_1.errorHandler.handleError(err, res);
});
exports.default = router;
