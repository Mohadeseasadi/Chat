import { Response } from "express";
import { HttpStatusCode } from "../abstractions/global/http-status-code.enum";
import { ChatRoomError } from "./error-type.class";
import { errorMap } from "./errors/explains";
import { GENERAL } from "./errors/explains/general.explain";

const parsingRokcetError = (
  res: Response,
  httpCode: HttpStatusCode,
  errorCode: string,
  description: any = "Error",
  explain?: ChatRoomError
) => {
  let body: ChatRoomError;
  const descriptionBody: any = {};
  if (description !== "Error") {
    descriptionBody.description = description;
  }
  if (explain) {
    body = {
      fa: explain.fa,
      en: explain.en,
      code: errorCode,
    };
  } else {
    const messages = errorCode.split(".");
    if (!messages || messages.length !== 2) {
      body = {
        fa: errorCode || GENERAL.fa.INTERNAL,
        en: errorCode || GENERAL.en.INTERNAL,
        code: errorCode || GENERAL.code.INTERNAL,
      };
    } else {
      body = {
        fa:
          errorMap[messages[0]].fa[messages[1]] ||
          "در یافتن متن خطا دچار مشکل شدیم",
        en: errorMap[messages[0]].en[messages[1]] || "Error finding message",
        code: errorMap[messages[0]].code[messages[1]] || "000000",
      };
    }
  }
  body = {
    ...body,
    ...descriptionBody,
  };

  return res.sendResponse({ error: body }, httpCode);
};

export default parsingRokcetError;
