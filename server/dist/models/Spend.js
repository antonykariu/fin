"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categories = [
    "Housing",
    "Transportation",
    "Food",
    "Utilities",
    "Clothing",
    "Medical/Healthcare",
    "Insurance",
    "Household items/supplies",
    "Personal",
    "Debt",
    "Education",
    "Savings",
    "Retirement",
    "Gift/Donations",
    "Entertainment",
];
const spendSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    source: String,
});
const Spend = (0, mongoose_1.model)("Spend", spendSchema);
exports.default = Spend;
