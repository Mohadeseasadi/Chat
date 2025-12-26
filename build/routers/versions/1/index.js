"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const application_routes_1 = tslib_1.__importDefault(require("./application.routes"));
const router = (0, express_1.Router)();
router.use("/application", application_routes_1.default);
exports.default = router;
