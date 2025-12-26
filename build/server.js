"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, async () => {
    console.log(`Chat-Room run on port ${PORT}`);
});
