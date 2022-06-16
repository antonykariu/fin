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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const uri = process.env.URI;
(0, mongoose_1.connect)(uri);
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
});
const User = (0, mongoose_1.model)('User', userSchema);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mongoose_1.connect)(uri);
        const user = new User({
            name: 'Bill Mer',
            email: 'billmer@gmail.com',
            avatar: 'https://i.imgur.com/dM7Thhn.png',
        });
        yield user.save();
        console.log(user.email);
    });
}
// run().catch(err => console.log(err))
app.get("/", (req, res) => {
    res.send("Express + Typescript Server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port} or is it`);
});
