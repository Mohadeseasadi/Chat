import { HttpStatusCode } from "../abstractions/global/http-status-code.enum";
import { BaseError } from "./base-error.class";
import ErrorCode from "./errors/error-code";

class ValidationError extends BaseError {
  errorData: Record<string, string>[];
  constructor(data: any) {
    super(ErrorCode.GENERAL.VALIDATION, HttpStatusCode.BAD_REQUEST, data);
    this.errorData = data;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export { ValidationError };
