import { NextFunction, Request, Response } from "express";

const applicationInformationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ApplicationInformation = {
      name: "Chat Room",
      versions: "1.0.0",
    };

    console.log("Rocket info api");
    return res.sendResponse(ApplicationInformation);
  } catch (err) {
    next(err);
  }
};

export default applicationInformationHandler;
