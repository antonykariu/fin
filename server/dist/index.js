"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpTerminator = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
require("express-async-errors");
const http_terminator_1 = require("http-terminator");
const ErrorHandler_1 = require("./errors/ErrorHandler");
require("./process");
//? Routes
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const spend_routes_1 = __importDefault(require("./routes/spend.routes"));
// // TODO add Error handling
// // TODO add controllers
// TODO  add documentation Typedoc
// TODO add spend Feature
// TODO add logging
// TODO add session management
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
exports.server = http_1.default.createServer(app);
exports.httpTerminator = (0, http_terminator_1.createHttpTerminator)({ server: exports.server });
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello" });
});
app.use("/user", user_routes_1.default);
app.use("/spend", spend_routes_1.default);
//! Error handling
app.use((err, req, res, next) => {
    // Log error here
    // logger.logError(err)
    next(err);
});
app.use((err, req, res, next) => {
    // Send message to self
    // messenger.sendErrorMessage(err)
    next(err);
});
app.use((err, req, res, next) => {
    // Log error here
    ErrorHandler_1.errorHandler.handleError(err, res);
});
app.listen(port, () => {
    console.log(`⚡️[server]: is running on port ${port}`);
});
