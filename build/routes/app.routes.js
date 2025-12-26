"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const _1_1 = tslib_1.__importDefault(require("./versions/1"));
const router = (0, express_1.Router)();
router.use("/api/v1", _1_1.default);
exports.default = router;
