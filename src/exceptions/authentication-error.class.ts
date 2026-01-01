import { HttpStatusCode } from "../abstractions/global/http-status-code.enum";
import { BaseError } from "./base-error.class";
import ErrorCode from "./errors/error-code";

class AuthenticationError extends BaseError {
  constructor(message: string) {
    super(ErrorCode.GENERAL.UNAUTHORIZED, HttpStatusCode.UNAUTHORIZED, message);
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }
}

export { AuthenticationError };
