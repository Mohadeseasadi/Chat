import { HandlerError } from "@chat/exceptions/handler-error.class";
import { MinioService } from "@chat/services/minio/minio.service";
import { NextFunction, Request, Response } from "express";

const getIMageHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const uuid = req.query.id as string;
    if (!uuid) {
      throw new HandlerError("UUID is required");
    }

    const minioService = new MinioService();
    const stream = await minioService.getFile(uuid);

    // res.setHeader("Content-Type", "image/jpeg");
    // stream.pipe(res);
  } catch (err) {
    next(err);
  }
};

export default getIMageHandler;
