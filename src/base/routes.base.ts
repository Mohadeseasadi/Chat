import { Application, Request, Response, Router } from "express";

const ChatRoomRoutes = (application: Application, router: Router): void => {
  application.use("/", router);

  // مسیر 404 آخر همه چیز باشه
  application.all(/.*/, (req: Request, res: Response) => {
    res.status(404).json({
      msg: "404 not found",
    });
  });
};

export default ChatRoomRoutes;
