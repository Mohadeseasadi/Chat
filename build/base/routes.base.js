"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatRoomRoutes = (application, router) => {
    application.use("/", router);
    application.get("*", (req, res) => {
        res.status(404).send({
            msg: "404 not found",
        });
    });
};
exports.default = ChatRoomRoutes;
