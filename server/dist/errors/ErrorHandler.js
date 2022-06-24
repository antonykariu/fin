"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("./AppError");
const ExitHandler_1 = require("./ExitHandler");
class ErrorHandler {
    handleError(error, response) {
        if (this.isTrustedError(error) && response) {
            this.handleTrustedError(error, response);
        }
        else {
            this.handleCriticalError(error, response);
        }
    }
    isTrustedError(error) {
        if (error instanceof AppError_1.AppError) {
            return error.isOperational;
        }
        return false;
    }
    handleTrustedError(error, response) {
        response.status(error.httpCode).json({ message: error.message });
    }
    handleCriticalError(error, response) {
        if (response) {
            response
                .status(AppError_1.HttpCode.INTERNAL_SERVER_ERROR)
                .json({ message: "Internal server error" });
        }
        console.log("Application encountered a critical error.");
        console.log(error);
        ExitHandler_1.exitHandler.handleExit(1);
    }
}
exports.errorHandler = new ErrorHandler();
