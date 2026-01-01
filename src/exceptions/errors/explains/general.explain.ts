import { ErrorExplain } from "../../error.explain.interface";

/**
 * GENERAL ERROR : 100
 */
export const GENERAL: ErrorExplain = {
  fa: {
    NOT_FOUND: "موردی یافت نشد.",
    INTERNAL: "عملیات دچار مشکل شد.",
    BAD_REQUEST: "پارامترهای ارسالی نامعتبر است.",
    VALIDATION: "پارامترهای ارسالی نامعتبر است.",
    CONFLICT: "این درخواست به دلیل داده های تکراری یا تداخل قابل اجرا نیست.",
    UNAUTHORIZED: "حق دسترسی به این سرویس را ندارید.",
    INVALID_REQUEST: "درخواست شما معتبر نیست",
    OTP_FAILED: "رمز یکبار مصرف اشتباه وارد شده است",
    OTP_EXPIRED: "رمز یکبار مصرف منقضی شده است",
    TOKEN_EXPIRED: "نشست شما منقضی شده است. لطفا مجددا وارد شوید",
    REQUEST_EXPIRED:
      "درخواست شما منقضی شده است، لطفا از ابتدا عملیات را انجام دهید",
    OTP_ALREADY_SEND: "برای ارسال مجدد پیامک چند لحظه دیگر تلاش نمایید",
  },
  en: {
    NOT_FOUND: "Item not found",
    INTERNAL: "Operation failed",
    BAD_REQUEST: "Invalid parameters",
    VALIDATION: "Invalid parameters format",
    CONFLICT: "Conflict or duplicated data",
    UNAUTHORIZED: "Authorization failed",
    INVALID_REQUEST: "Invalid parameters or request.",
    OTP_FAILED: "OTP_FAILED",
    OTP_EXPIRED: "OTP_EXPIRED",
    TOKEN_EXPIRED: "your session was expired! please login again.",
    REQUEST_EXPIRED: "your request was expired! please apply again",
    OTP_ALREADY_SEND: "OTP_ALREADY_SEND",
  },
  code: {
    // error code: 001
    NOT_FOUND: 100001,
    // error code: 002
    INTERNAL: 100002,
    // error code: 003
    BAD_REQUEST: 100003,
    // error code: 004
    VALIDATION: 100004,
    // error code: 005
    CONFLICT: 100005,
    // error code: 006
    UNAUTHORIZED: 1100006,
    // error code: 007
    INVALID_REQUEST: 100007,
    OTP_FAILED: 100008,
    OTP_EXPIRED: 100009,
    TOKEN_EXPIRED: 100010,
    REQUEST_EXPIRED: 100011,
    OTP_ALREADY_SEND: 100012,
  },
};
