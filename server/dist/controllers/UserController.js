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
exports.users = void 0;
const users = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // FIXME change to have error handling
    const uri = process.env.URI;
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
});
exports.users = users;
