"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpTerminator = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const http_terminator_1 = require("http-terminator");
require("./process");
//? Routes
const routes_1 = __importDefault(require("./routes/routes"));
// TODO add Error handling
// TODO add controllers
// TODO add session management
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
exports.server = http_1.default.createServer(app);
exports.httpTerminator = (0, http_terminator_1.createHttpTerminator)({ server: exports.server });
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello" });
});
app.use("/", routes_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: is running on port ${port}`);
});
