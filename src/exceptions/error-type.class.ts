import { HttpStatusCode } from "../abstractions/global/http-status-code.enum";

export type ChatRoomError = {
  fa: string;
  en: string;
  code: number | string | HttpStatusCode;
  description?: string;
};
