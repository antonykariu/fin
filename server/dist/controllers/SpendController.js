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
exports.create = void 0;
const mongoose_1 = require("mongoose");
const Spend_1 = __importDefault(require("../models/Spend"));
/**
 * This function creates a spend on the Database
 * @param req has params object of type Spend i.e {title,date,amount,category,?source}
 * @param res status 201 created successfully
 * @param next parses errors to error handlers
 */
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uri = process.env.URI;
    yield (0, mongoose_1.connect)(uri)
        .then(() => {
        const params = {
            title: req.query.title,
            date: req.query.date,
            amount: req.query.amount,
            category: req.query.category,
        };
        const spend = new Spend_1.default(params);
        spend.save();
    })
        .catch((error) => {
        next(error);
    })
        .finally(() => {
        res.status(201).json({ message: "Spend created successfully" });
    });
});
exports.create = create;
