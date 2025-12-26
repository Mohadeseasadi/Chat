"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const info_handler_1 = tslib_1.__importDefault(require("../../../handlers/application/info.handler"));
const applicationRouter = (0, express_1.Router)();
applicationRouter.get("/info", info_handler_1.default);
exports.default = applicationRouter;
