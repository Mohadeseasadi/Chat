import { HandlerError } from "@chat/exceptions/handler-error.class";
import { MinioService } from "@chat/services/minio/minio.service";
import { NextFunction, Request, Response } from "express";

const uploadIMageHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = req.file;
    if (!file) {
      throw new HandlerError("File is required");
    }
    const minioService = new MinioService();
    const objectName = await minioService.uploadFile(
      file.buffer,
      file.originalname
    );

    res.sendResponse({ objectName });
  } catch (err) {
    next(err);
  }
};

export default uploadIMageHandler;
