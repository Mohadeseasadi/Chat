import { HttpStatusCode } from '../abstractions/global/http-status-code.enum';
import { BaseError } from './base-error.class';

class AuthenticationError extends BaseError {
    constructor(message: string) {
        super("Authorization failed", HttpStatusCode.UNAUTHORIZED, message);
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }
}

export { AuthenticationError };