import { HttpStatusCode } from "../abstractions/global/http-status-code.enum";
import { BaseError } from "./base-error.class";

class HandlerError extends BaseError {
  constructor(
    errorCode: string,
    httpCode: HttpStatusCode = HttpStatusCode.BAD_REQUEST,
    description: string = "Error"
  ) {
    super(errorCode, httpCode, description);
  }
}

export { HandlerError };
