"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applicationInformationHandler = async (req, res, next) => {
    try {
        const ApplicationInformation = {
            name: "Chat Room",
            versions: "1.0.0",
        };
        console.log("Rocket info api");
        return res.send(ApplicationInformation);
    }
    catch (err) {
        next(err);
    }
};
exports.default = applicationInformationHandler;
