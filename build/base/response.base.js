"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_code_enum_1 = require("../abstractions/global/http-status-code.enum");
function sendResponse(res, data, code = http_status_code_enum_1.HttpStatusCode.OK) {
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
const ChatRoomResponse = (app) => {
    app.response.sendResponse = function (data, code = http_status_code_enum_1.HttpStatusCode.OK) {
        sendResponse(this, data, code);
    };
};
exports.default = ChatRoomResponse;
