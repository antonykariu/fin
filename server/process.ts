import { errorHandler } from "./errors/ErrorHandler";
import { exitHandler } from "./errors/ExitHandler";

process.on('unhandledRejection', (reason: Error | any) => {
    console.log(`Unhandled Rejection: ${reason.messsage || reason}`)

    throw new Error(reason.message || reason)
})

process.on('uncaughtException', (error: Error) => {
    console.log(`Uncaught Exception: ${error.message}`)
    errorHandler.handleError(error)
});

process.on('SIGTERM', () => {
    console.log(`Process ${process.pid} received SIGTERM: Exiting with code 0`);
    exitHandler.handleExit(0)
})

process.on('SIGINT', () => {
    console.log(`Process ${process.pid} received SIGINT: Exiting with code 0`);
    exitHandler.handleExit(0)
})