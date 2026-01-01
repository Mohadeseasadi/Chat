import { NextFunction, Request, Response } from "express";
import { ConflictError } from "../exceptions/conflict-error.class";
import { ValidationError } from "../exceptions/validation-error.class";

/**
 * Handle duplicate field
 */
const handleDuplicateKeyError = (err: any): Error => {
  const field = Object.keys(err.keyValue);
  const error = `Duplicate field: ${field} already exists. Please use another value!`;
  return new ConflictError({ messageEn: error, messageCode: "409" });
};

// handle field formatting, empty fields, and mismatched passwords
const handleValidationError = (err: any): Error => {
  const errors = Object.values(err.errors).map((el: any) => el.message);
  const fields = Object.values(err.errors).map((el: any) => el.path);
  if (errors.length > 1) {
    const formattedErrors = errors.join("");
    return new ValidationError({ messageEn: formattedErrors });
  } else {
    const message = `Invalid input data: ${errors
      .join(" / ")
      .replace(/Path `/g, "`")} and fields: {${fields.join(",")}}`;
    return new ValidationError({ messageEn: message });
  }
};

const mongooseErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  if (!err) {
    return next();
  }
  if (err.code === 11000 || err.code === 11001) {
    err = handleDuplicateKeyError(err);
  } else if (err.name === "ValidationError" || err.name === "CastError") {
    err = handleValidationError(err);
  }
  next(err);
};

export default mongooseErrorMiddleware;
