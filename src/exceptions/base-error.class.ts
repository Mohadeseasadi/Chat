import { HttpStatusCode } from "../abstractions/global/http-status-code.enum";

class BaseError extends Error {
  public readonly errorCode: string;
  public readonly description: string;
  public readonly httpCode: HttpStatusCode;
  public readonly isOperational: boolean;

  constructor(
    errorCode: string,
    httpCode: HttpStatusCode,
    description?: string,
    isOperational?: boolean
  ) {
    super(description);
    Object.setPrototypeOf(this, BaseError.prototype);

    this.errorCode = errorCode;
    this.httpCode = httpCode;
    this.description = description || "Error";
    this.isOperational = isOperational || false;

    Error.captureStackTrace(this, this.constructor);
  }
}

export { BaseError };
