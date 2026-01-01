import { NextFunction, Request, Response } from "express";
import { HttpStatusCode } from "../abstractions/global/http-status-code.enum";
import { BaseError } from "../exceptions/base-error.class";
import { HandlerError } from "../exceptions/handler-error.class";
import parsingRokcetError from "../exceptions/parsing-error.class";
import { ValidationError } from "../exceptions/validation-error.class";

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HandlerError) {
    console.log(parsingRokcetError(res, err.httpCode, err.message));
    return parsingRokcetError(res, err.httpCode, err.errorCode);
  } else if (err instanceof ValidationError) {
    return parsingRokcetError(res, err.httpCode, err.errorCode);
  } else if (err instanceof BaseError) {
    return parsingRokcetError(res, err.httpCode, err.errorCode);
  } else {
    // log the error
    console.log(err);
    // send generic error message
    return res.sendResponse(
      {
        message: "Something went wrong",
        err,
      },
      HttpStatusCode.BAD_REQUEST
    );
  }
};

export default errorMiddleware;
