"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_1 = require("./errors/ErrorHandler");
const ExitHandler_1 = require("./errors/ExitHandler");
process.on('unhandledRejection', (reason) => {
    console.log(`Unhandled Rejection: ${reason.messsage || reason}`);
    throw new Error(reason.message || reason);
});
process.on('uncaughtException', (error) => {
    console.log(`Uncaught Exception: ${error.message}`);
    ErrorHandler_1.errorHandler.handleError(error);
});
process.on('SIGTERM', () => {
    console.log(`Process ${process.pid} received SIGTERM: Exiting with code 0`);
    ExitHandler_1.exitHandler.handleExit(0);
});
process.on('SIGINT', () => {
    console.log(`Process ${process.pid} received SIGINT: Exiting with code 0`);
    ExitHandler_1.exitHandler.handleExit(0);
});
