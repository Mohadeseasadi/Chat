import { IUser } from "@chat/interfaces/user/user.interface";
import "socket.io";
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

declare module "socket.io" {
  interface Socket {
    user?: any;
  }
}
