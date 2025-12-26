import { Response } from "express";
import { HttpStatusCode } from "../abstractions/global/http-status-code.enum";

function sendResponse(
  res: Response,
  data: any,
  code: HttpStatusCode = HttpStatusCode.OK
): void {
  let success = true;
  switch (code) {
    case 200:
      success = true;
      break;
    case 400:
      success = false;
      break;
    case 401:
      success = false;
      break;
    default:
      success = true;
  }
  res.status(code).json({
    status: code,
    success,
    result: data,
  });
}

const ChatRoomResponse = (app: any): void => {
  app.response.sendResponse = function (
    data: string,
    code: HttpStatusCode = HttpStatusCode.OK
  ) {
    sendResponse(this, data, code);
  };
};

export default ChatRoomResponse;
