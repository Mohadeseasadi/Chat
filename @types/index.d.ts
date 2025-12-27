import { IUser } from "@rocket/interfaces/user/user.interface";
import { HttpStatusCode } from "../src/abstractions/global/http-status-code.enum";

declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser;
    }
    export interface Response {
      sendResponse: (data: any, code?: HttpStatusCode | number) => void;
    }
  }
}
