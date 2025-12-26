import { HttpStatusCode } from "../src/abstractions/global/http-status-code.enum";

declare global {
  namespace Express {
    export interface Response {
      sendResponse: (data: any, code?: HttpStatusCode | number) => void;
    }
  }
}
