import { HttpStatusCode } from "../abstractions/global/http-status-code.enum";
import { BaseError } from "./base-error.class";
import ErrorCode from "./errors/error-code";

class ConflictError extends BaseError {
  errorData: Record<string, string>[];
  constructor(data: any) {
    super(ErrorCode.GENERAL.CONFLICT, HttpStatusCode.CONFLICT, data);
    this.errorData = data;
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
}

export { ConflictError };
